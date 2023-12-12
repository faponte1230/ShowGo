class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    # def update
    #     event = Event.find(params[:id])
    #     event.update!(event_params)
    #     render json: event, status: :accepted
    # end

    def destroy
        Event.find(params[:id]).destroy
        head :no_content
    end


    private

    def event_params
        params.permit(:event_name, :venue_id, :band_id)
    end

end
