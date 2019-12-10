class PagesController < ApplicationController
  def home
  end

  def people
    results = FetchDataService.new(type: 'people').call
    @more = results['next']
    @people = results['results']
  end

  def planets
    results = FetchDataService.new(type: 'planets').call
    @more = results['next']
    @planets = results['results']
  end

  def films
    results = FetchDataService.new(type: 'films').call
    @more = results['next']
    @films = results['results']
  end

  def species
    results = FetchDataService.new(type: 'species').call
    @more = results['next']
    @species = results['results']
  end

  def vehicles
    results = FetchDataService.new(type: 'vehicles').call
    @more = results['next']
    @vehicles = results['results']
  end

  def starships
    results = FetchDataService.new(type: 'starships').call
    @more = results['next']
    @starships = results['results']
  end
end
