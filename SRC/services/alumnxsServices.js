

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const alumnxsServices = {
    async getAlumnxs(){
        let response = await apiClient.get("/Alumnxs")
        console.log (response.data)
        return response.data;

    },
    async getAlumnxs(id){

    },
    async deleteAlumnxs(id){

    },
    async updateAlumnxs(id, newAlumnx)
    {

    },
}
