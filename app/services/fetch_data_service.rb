class FetchDataService
  def initialize(params)
    @type = params[:type]
  end

  def call
    SwapiService.new(url: "https://swapi.co/api/#{@type}/").call
  end
end
