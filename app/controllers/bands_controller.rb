class BandsController < ApplicationController

    def index
        bands = Band.all  
        render json: bands
    end

    def create
        band = Band.create(band_params)
        if band.valid?
            render json: band, status: :created
        else
            render json: { errors: band.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        band = Band.find_by(id: params[:id])
        render json: band, status: :ok
    end


    private

    def band_params
        params.permit(:band_name, :genre, :band_img_url)
    end

end
