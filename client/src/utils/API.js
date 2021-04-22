import axios from "axios";

export default {
    updateMood: function(data) {
        return axios.post("/api/mood", {
            expressions: data.expressions
        })
        .then(function (response) {
        console.log(response);
        alert('Mood Has Been Saved')
        })
        .catch(function (error) {
        console.log(error);
        })
    },

    findUser: function(data) {
        return axios.get(`/api/user/${data}`)
        .then(function (response) {
        console.log(response);
        if(response.data != null) {
            alert(`${response.data.user} is now logged in`)
            localStorage.setItem('Profile', JSON.stringify(response.data));
        } else {
            return axios.post('/api/user', {
                user: data,
                expressions: 'No Moods Yet'
            })
            .then(function (response) {
            console.log(response);
            localStorage.setItem('Profile', JSON.stringify(response.data));
            alert('User Has Been Saved')
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
}