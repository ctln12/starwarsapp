class SearchService
  def call(params)
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
      results.flatten
    end
  end
end
