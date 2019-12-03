require 'json'
require 'open-uri'

class PagesController < ApplicationController
  def home
    # get resources types
    base_url = 'https://swapi.co/api/'
    serialized_resources = URI.open(base_url).read
    resources = JSON.parse(serialized_resources)
    @resources = resources.keys
    # get people
    people_data = Swapi.get_all 'people'
    @people = JSON.parse(people_data)['results']
    # get planets
    planets_data = Swapi.get_all 'planets'
    @planets = JSON.parse(planets_data)['results']
    # get films
    films_data = Swapi.get_all 'films'
    @films = JSON.parse(films_data)['results']
    # get species
    species_data = Swapi.get_all 'species'
    @species = JSON.parse(species_data)['results']
    # get vehicles
    vehicles_data = Swapi.get_all 'vehicles'
    @vehicles = JSON.parse(vehicles_data)['results']
    # get starships
    starships_data = Swapi.get_all 'starships'
    @starships = JSON.parse(starships_data)['results']
  end
end
