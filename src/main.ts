import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: [`${process.env.SERVER_URL}`],
        credentials: true,
    })

    /*const config = new DocumentBuilder()
        .setTitle('Курс по NestJs')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('NestJs')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);*/
    // app.useGlobalGuards(JwtAuthGuard);

    await app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
}

start()
