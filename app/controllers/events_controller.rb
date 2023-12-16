class EventsController < ApplicationController
    before_action :authorize_admin, only: [:create, :destroy]
    before_action :authorize, only: [:index, :show]
  
    def index
      events = Event.all
      render json: events, status: :ok
    end
  
    def create
      event = Event.create!(event_params)
      render json: event, status: :created
    end

    def update
      event = find_event
      event.update!(event_params)
      render json: event
    end

    def show
      event = find_event
      render json: event, status: :ok
    end
  
    def destroy
      event = find_event
      event.destroy
      head :no_content
    end
  
    private
  
    def find_event
      Event.find(params[:id])
    end
  
    def event_params
      params.require(:event).permit(:event_name, :venue_id, :band_id)
    end
end