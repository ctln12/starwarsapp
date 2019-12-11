class PagesController < ApplicationController
  def home
    @search_results = []
    if params[:query].present?
      results = []
      people = SwapiService.new(url: "https://swapi.co/api/people/?search=#{params[:query]}&format=json").call['results']
      results << people
      planets = SwapiService.new(url: "https://swapi.co/api/planets/?search=#{params[:query]}&format=json").call['results']
      results << planets
      films = SwapiService.new(url: "https://swapi.co/api/films/?search=#{params[:query]}&format=json").call['results']
      results << films
      species = SwapiService.new(url: "https://swapi.co/api/species/?search=#{params[:query]}&format=json").call['results']
      results << species
      vehicles = SwapiService.new(url: "https://swapi.co/api/vehicles/?search=#{params[:query]}&format=json").call['results']
      results << vehicles
      starships = SwapiService.new(url: "https://swapi.co/api/starships/?search=#{params[:query]}&format=json").call['results']
      results << starships
      @search_results = results.flatten
    end
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
