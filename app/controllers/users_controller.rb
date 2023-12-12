class UsersController < ApplicationController
    skip_before_action :authorize, only:[:create]
    #after_create :set_first_user_as_admin
 
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
        user = User.find_by(id: session[:id])
        render json: user, status: :ok
    end
 
    private
    # Only allow a list of trusted parameters through.
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
 
    def set_first_user_as_admin
        if User.where(isAdmin: true).count == 1
            update_column(:isAdmin, false)
        elsif User.where(isAdmin: true).count.zero?
            update_column(:isAdmin, true)
        end
    end
     
end
 