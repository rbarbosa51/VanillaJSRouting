const routes = {
    "404": "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html"
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const route = routes[window.location.pathname] || routes[404];
    const data = await fetch(route);
    document.getElementById('main-page').innerHTML = await data.text();
}
window.addEventListener('popstate', handleLocation);
handleLocation();