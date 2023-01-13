import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'})

	app.enableCors(
		{
			origin: "http://localhost:4200",
			methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
			credentials: true
		}
	);

	await app.listen(3000);
}

bootstrap();
