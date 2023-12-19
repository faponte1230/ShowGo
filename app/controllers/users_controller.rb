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
        if session[:user_id]
          user = User.includes(:favorite_bands, :events).find_by(id: session[:user_id])
          render json: user, status: :ok
        else
          render json: { error: 'User not found' }, status: :not_found
        end
    end
      


    private
    # Only allow a list of trusted parameters through.
    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar)
    end
     
end
 