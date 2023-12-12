class VenuesController < ApplicationController
  before_action :authorize, only: [:index, :show]
  before_action :authorize_admin, only: [:create, :update, :destroy]

  def index
    venues = Venue.all  
    render json: venues
  end

  def create
    venue = Venue.create(venue_params)
    if venue.valid?
    render json: venue, status: :created
    else
      render json: { errors: venue.errors.full_messages}, status: :unprocessable_entity
    end  
  end

  def show
    venue = find_venue
    render json: venue, status: :ok
  end

  def update
    venue = find_venue
    venue.update(venue_params)
      if venue.valid?
      render json: venue
      else
          render json: { error: venue.errors.full_messages}, status: :unprocessable_entity
      end
  end

  def destroy
    venue = find_venue
    venue.destroy
    head :no_content
end

  private

  def find_venue
    Venue.find(params[:id])
  end
  
  def venue_params
    params.permit(:venue_name, :location, :venue_img_url)
  end


end
