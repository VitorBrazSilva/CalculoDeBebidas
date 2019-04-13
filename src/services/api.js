import { create } from 'apisauce';

const api = create({
    baseUrl: 'https://ticket4you.com.br/web',
});

api.addResponseTransform(response =>{
    if(!response.ok) throw response;
})

export default api;
