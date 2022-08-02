

// create the HTML page for export
module.exports = pageData => {
    // deconstruct page data

    // create HTML output    
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="employee card">
                        <div class="card-header">
                            <h3>${name}</h3>
                            <h4>${role}</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </body>

    </html>
    `;
};