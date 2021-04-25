import axios from "axios";

export default {
    
    createMood: function(data) {
        console.log("data: ",data)
        return axios.post("/api/mood", {
            // name: data.name,
            googleId: data.googleId,
            expressions: data.expressions
        })
        .then(function (response) {
        console.log("create mood res",response);
        alert('Mood Has Been Saved!')
        })
        .catch(function (error) {
        console.log(error);
        })
    },


    updateMood: function(data) {
        return axios.put("/api/mood", {
            expressions: data.expressions
        })
        .then(function (response) {
        console.log(response);
        alert('Mood Has Been Updated!')
        })
        .catch(function (error) {
        console.log(error);
        })
    },

    findUser: function(data) {
        return axios.get(`/api/user/${data.googleId}`)
        .then(function (response) {
        console.log(response);
        if(response.data.length) {
            // alert(`${data.name} is now logged in`)
            localStorage.setItem('Profile', JSON.stringify(response.data));
        } else {
            return axios.post('/api/user', {
                googleId: data.googleId,
                name: data.name,
                expressions: [],

            })
            .then(function (response) {
            console.log(response);
            localStorage.setItem('Profile', JSON.stringify(response.data));
            // alert('User Has Been Saved')
            })
            .catch(function (error) {
            console.log(error);
            })
        }
        })
        .catch(function (error) {
        console.log(error);
        })


    }

    // findProfileUser: function(data){
    //     return axios.get(`/api/user/${data}`)
    //     .then(function (response){
    //         return (response)
    //     })
    // }
    
}