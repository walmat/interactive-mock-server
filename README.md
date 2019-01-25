# Interactive Mock Server

An mock server that allows you to dynamically adjust mock endpoints in real-time!

## Install and Run

Install the mock server globally and run it:
```sh
# Install using yarn:
$ yarn global add interactive-mock-server
# Install using npm:
$ npm install --global interactive-mock-server
# Now use it!
$ interactive-mock-server
```

You can also install it locally:
```sh
# Install using yarn:
$ yarn add interactive-mock-server --dev
# Install using npm:
$ npm install --save-dev interactive-mock-server
# Now use it!
$ yarn interactive-mock-server
$ npx interactive-mock-server
```

Once started, navigate to `localhost:9000/__dashboard` (see more info on the [dashboard](#using-the-dashboard))

## Overview

Almost all mock server implementations provide the option to specify mock routes/endpoints 
beforehande, but they don't allow you to dynamically adjust those routes after a certain 
amount of time. While those implementations are geared toward CI environment testing, manual 
testing of you app is also important.

### Exploring Different Responses

How your app responds to different responses requires a type of exploration that other mock 
servers don't have. The ability to adjust a route's response dynamically allows you to test 
how the app responds to different responses from the same route _over time_. This also allows 
you to explore how the app responds to unexpected responses without having to copy boilerplate 
code, adjust one small part (such as the the status code) and restart the server. 

Instead this mock server provides an interactive way of adjusting simple parts of the mocked 
response without having to stop and start the mock server over and over.

### Using the dashboard

Once the server is started (see instructions [running](#install-and-run)), You can navigate to the
dashboard page `/__dashboard`. This route exists as a way to prevent conflicts with other 
potential mock endpoints. From this page, you can view endpoints (`/__dashboard/endpoints`), 
create a new endpoint (`/__dashboard/endpoints/new`) or view/edit an existing endpoint 
(`/__dashboard/endpoints/:id`). 

Once an endpoint has been created, it will be automatically enabled on the mock server. 

## Contributing

If you have a bug/feature request head over to the [issues](https://github.com/pr1sm/interactive-mock-server/issues) page. 
All Issues and PRs are welcome!

### Debugging

1. Clone the project
2. Install dependencies: `yarn install`
3. Build the frontend: `yarn run build`
4. Launch the server: `yarn run dev:app`
5. Navigate to the dashboard: (default is `http://localhost:9000/__dashboard`)

Created mock endpoints are available from the same base: `http://localhost:9000/`

### Debugging the frontend

Repeat steps 1-4 above and

5. Launch the webpack dev server: `yarn run dev:web`
6. Navigate to the development dashboard: (default is `http://localhost:9100/__dashboard`)

> NOTE: The mock server must also be running in a separate terminal (Step 4). The dashboard uses 
> several API methods from the mock server that are automatically proxied to the mock server.

> ALSO NOTE: All created mock endpoints will be available using the mock server, NOT the webpack
> dev server. You will have to go to `http://localhost:9000` instead of `http://localhost:9100` 
> to test the mock endpoints created


## Shopify Queue Testing

If you're developing a system where you need to setup a test environment for Shopify's throttle queue (like I've had to do while developing nebula), you can easily do so with this server. I'll write up a quick guide here on the setup process for doing so.

### Prerequisites

Make sure you've gone through the `Install and Run` section of this README first. After doing so, navigate to the [dashboard](http://localhost:9000/__dashboard). Here we can begin to setup the required endpoints needed in order to test a proper queue response from Shopify.

#### /checkout endpoint

If you're at the dashboard homepage, navigate to the [endpoints page](http://localhost:9000/__dashboard/endpoints). Click on [new](http://localhost:9000/__dashboard/endpoints/new) to begin setting up the `/checkout` endpoint. The endpoint should look like the screenshot below.



