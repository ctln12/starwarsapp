class TransformDataService
  def initialize(params)
    @results = params[:results]
  end

  def call
    @results.each do |result|
      url = result['homeworld']
      result['homeworld'] = SwapiService.new(url: url).call['name']
    end
  end
end
