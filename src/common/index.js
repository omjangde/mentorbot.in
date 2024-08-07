const backendDomain = "http://localhost:8000"

const SummaryApi = {
    SignUp : {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    SignIn : {
        url: `${backendDomain}/api/signin`,
        method: "post"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "get"
    }
}

export default SummaryApi;