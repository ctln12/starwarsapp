class PagesController < ApplicationController
  def home
    base_url = 'https://swapi.co/api/'

    resources = CallApiService.new(url: base_url).call
    @resources_types = resources.keys

    @types = {}
    resources.each do |key, value|
      @types[key.to_sym] = CallApiService.new(url: value).call
    end
  end
end
