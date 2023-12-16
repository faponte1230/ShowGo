class AttendeesController < ApplicationController
    before_action :authorize

    def create
        
        attendee = Attendee.create(user_id: params[:user_id], event_id: params[:event_id])
        if attendee.valid?
            render json: attendee, status: :ok
        else
            render json: { error: attendee.errors.full_messages }
        end

    end
    
    def show
        event_id = params[:event_id]
        user_id = params[:user_id]

        user_attendee = Attendee.find_by(event_id: event_id, user_id: user_id)

        if user_attendee
            render json: user_attendee
        else
            render json: { error: 'User attendee not found' }, status: :not_found
        end
    end

    def destroy
        attendee = find_attendee
        attendee.destroy
        head :no_content
    end

    private

    def attendee_params
        params.require(:attendee).permit(:event_id, :user_id)
    end

    def find_attendee
        Attendee.find_by(id: params[:id])
    end
end
