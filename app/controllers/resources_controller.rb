require 'json'
require 'open-uri'

class ResourcesController < ApplicationController
  def index
    url = 'https://swapi.co/api/'
    serialized_root = URI.open(url).read
    @root_resource = JSON.parse(serialized_root)
  end
end
