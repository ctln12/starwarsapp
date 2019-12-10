class PagesController < ApplicationController
  def home
  end

  def people
    results = FetchDataService.new(type: 'people').call
    @more_people = results['next']
    @people = results['results']
  end

  def planets
    results = FetchDataService.new(type: 'planets').call
    @more_planets = results['next']
    @planets = results['results']
  end

  def films
    results = FetchDataService.new(type: 'films').call
    @more_films = results['next']
    @films = results['results']
  end

  def species
    results = FetchDataService.new(type: 'species').call
    @more_species = results['next']
    @species = results['results']
  end

  def vehicles
    results = FetchDataService.new(type: 'vehicles').call
    @more_vehicles = results['next']
    @vehicles = results['results']
  end

  def starships
    results = FetchDataService.new(type: 'starships').call
    @more_starships = results['next']
    @starships = results['results']
  end
end
