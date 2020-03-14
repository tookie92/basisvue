json.extract! client, :id, :name, :email, :gender, :phone, :exp1, :exp2, :exp3, :education, :extras, :description, :created_at, :updated_at
json.url client_url(client, format: :json)
