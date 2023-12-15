class FavoriteBandsController < ApplicationController
 

    def create
       
        favBand = FavoriteBand.create(fav_params)
        if favBand.valid?
            render json: favBand, status: :ok
        else
            render json: { errors: favBand.errors.full_messages }
        end
    end
    

    def destroy
       favBand = find_band
       favBand.destroy
       head :no_content
    end

    private

    def fav_params
        params.require(:favorite_band).permit(:user_id, :band_id)
    end
    
    def find_band
        FavoriteBand.find_by(id: params[:id])
    end
end
