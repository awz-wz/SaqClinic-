using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Spa", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("Spa");
app.UseDefaultFiles();
app.UseStaticFiles();

var content = new
{
    Clinic = new
    {
        Name = "Saq Clinic",
        Tagline = "Премиальный уход и образование для косметологов",
        Phone = "+7 (700) 123-45-67",
        Email = "info@saqclinic.kz",
        Address = "г. Алматы, пр. Абая 123"
    },
    Services = new object[]
    {
        new { Title = "Аппаратная косметология", Description = "Инновационные процедуры для омоложения и восстановления кожи." },
        new { Title = "Инъекционные методики", Description = "Гармонизация лица с помощью филлеров и ботулотоксина." },
        new { Title = "Уходовые программы", Description = "Индивидуальные SPA-протоколы с профессиональной косметикой." }
    },
    Training = new object[]
    {
        new { Title = "Базовый курс косметолога", Duration = "8 недель", Description = "Старт для новичков: анатомия, гигиена, практические навыки." },
        new { Title = "Продвинутый курс по инъекциям", Duration = "5 недель", Description = "Повышение квалификации по контурной пластике и ботулинотерапии." },
        new { Title = "Мастер-классы выходного дня", Duration = "2 дня", Description = "Интенсивы от приглашенных экспертов индустрии красоты." }
    },
    Products = new object[]
    {
        new { Title = "Saq Glow Serum", Price = "29 900 ₸", Description = "Сыворотка с витамином C для сияния и защиты кожи." },
        new { Title = "Hydra Balance Cream", Price = "19 500 ₸", Description = "Увлажняющий крем для чувствительной кожи." },
        new { Title = "ProPeel Solution", Price = "24 000 ₸", Description = "Домашний пилинг с мягким обновляющим эффектом." }
    }
};

app.MapGet("/api/content/services", () => Results.Ok(content.Services));
app.MapGet("/api/content/training", () => Results.Ok(content.Training));
app.MapGet("/api/content/products", () => Results.Ok(content.Products));
app.MapGet("/api/content/clinic", () => Results.Ok(content.Clinic));

app.MapFallbackToFile("index.html");

app.Run();
