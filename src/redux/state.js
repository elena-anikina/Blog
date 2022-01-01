const state = {
    authorized: false,
    articles: [],
    signUp: [
        {label: "Username", value: ""},
        {label: "Email address", value: ""},
        {label: "Password", value: ""},
        {label: "Repeat Password", placeholder: "Password", value: ""}
    ],
    pagination: {page: 1, trimStart: 0, trimEnd: 5, arrowStart: false, arrowEnd: true},
    errors: 0
};

export default state;