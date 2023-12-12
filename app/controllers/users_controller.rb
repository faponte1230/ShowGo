class UsersController < ApplicationController
    skip_before_action :authorize, only:[:create]
    
 
    # POST /users
    def create 
        user = User.create(user_params) 
        if user.valid? 
            session[:user_id] = user.id  #here, the user logs in. 
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
 
    #GET users/show FIX LATER WITH SESSION FIND
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end
 
    private
    # Only allow a list of trusted parameters through.
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
     
end
 