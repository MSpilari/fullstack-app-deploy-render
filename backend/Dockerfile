FROM eclipse-temurin:21-jdk-alpine
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java","-jar","target/render-0.0.1-SNAPSHOT.jar"]