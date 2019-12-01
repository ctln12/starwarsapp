require 'json'
require 'open-uri'

class ResourcesController < ApplicationController
  def index
  end

  def show
    url = "https://swapi.co/api/#{params[:id]}"
    serialized_resource = URI.open(url).read
    resource = JSON.parse(serialized_resource)
    @resource = resource['results']
  end
end
