using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("allowAll", policy =>
    {
        policy.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();


    });
});


var app = builder.Build();
app.UseCors("allowAll");
app.MapGet("/", () => "Hello World!");


//Celsius calculations

//celsius to fahrenheit

app.MapPost("/ctof", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var fahrenheit = input * 1.8 + 32;
        return Results.Ok(fahrenheit);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//celsius to kelvin

app.MapPost("/ctok", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var kelvin = input + 273.15;
        return Results.Ok(kelvin);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//celsius to celsius

app.MapPost("/ctoc", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var celsius = input;
        return Results.Ok(celsius);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//fahrenheit 
//fahrenheit to celsius

app.MapPost("/ftoc", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var celsius = (input - 32) * (5.0 / 9.0);
        return Results.Ok(celsius);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//fahrenheit to kelvin
app.MapPost("/ftok", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var kelvin = (input - 32) * (5.0 / 9.0) + 273.15;
        return Results.Ok(kelvin);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//fahrenheit to fahrenheit
app.MapPost("/ftof", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var fahrenheit = input;
        return Results.Ok(fahrenheit);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//kelvin

//kelvin to celsius
app.MapPost("/ktoc", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var celsius = input - 273.15;
        return Results.Ok(celsius);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//kelvin to fahrenheit
app.MapPost("/ktof", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var fahrenheit = (input - 273.15) * 1.8 + 32;
        return Results.Ok(fahrenheit);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


//kelvin to kelvin
app.MapPost("/ktok", ([FromForm] int input) =>
{
    if (input.GetType() == typeof(int))
    {
        var kelvin = input;
        return Results.Ok(kelvin);
    }
    else
        return Results.BadRequest(new { message = "Input must be a number" });
}
).DisableAntiforgery();


app.UseRouting();
app.MapControllers();
app.Run();
