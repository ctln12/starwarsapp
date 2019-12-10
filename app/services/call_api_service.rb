class CallApiService
  def initialize(params)
    @url = params[:url]
  end

  def call
    serialized_data = URI.open(@url).read
    JSON.parse(serialized_data)
  end
end
