class PagesController < ApplicationController
  def home
  end

  def people
    results = FetchDataService.new(type: 'people').call
    @more = results['next']
    TransformDataService.new(results: results['results']).call
    @people = delete(results['results'])
  end

  def planets
    results = FetchDataService.new(type: 'planets').call
    @more = results['next']
    @planets = delete(results['results'])
  end

  def films
    results = FetchDataService.new(type: 'films').call
    @more = results['next']
    @films = delete(results['results'])
  end

  def species
    results = FetchDataService.new(type: 'species').call
    @more = results['next']
    TransformDataService.new(results: results['results']).call
    @species = delete(results['results'])
  end

  def vehicles
    results = FetchDataService.new(type: 'vehicles').call
    @more = results['next']
    @vehicles = delete(results['results'])
  end

  def starships
    results = FetchDataService.new(type: 'starships').call
    @more = results['next']
    @starships = delete(results['results'])
  end

  private

  def delete(data)
    data.each do |h|
      h.delete_if { |key, value| key == 'created' || key == 'edited' || key == 'url' || value.class == Array }
    end
  end
end
