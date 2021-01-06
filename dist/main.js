"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.enableCors();
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('API swagger')
        .setDescription('API Documentation')
        .setVersion('1.0.0')
        .addServer('http://')
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('/api/docs', app, swaggerDoc, {
        swaggerUrl: '/api/docs-json',
        explorer: true,
        swaggerOptions: {
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
        },
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map