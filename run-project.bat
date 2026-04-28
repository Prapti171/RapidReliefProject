@echo off
cd /d "%~dp0"
set "JAVA_EXE="
if exist "C:\jdk-17.0.18.8-hotspot\bin\java.exe" set "JAVA_EXE=C:\jdk-17.0.18.8-hotspot\bin\java.exe"
if not defined JAVA_EXE if exist "C:\Program Files\Eclipse Adoptium\jdk-17.0.18.8-hotspot\bin\java.exe" set "JAVA_EXE=C:\Program Files\Eclipse Adoptium\jdk-17.0.18.8-hotspot\bin\java.exe"
if not defined JAVA_EXE if defined JAVA_HOME if exist "%JAVA_HOME%\bin\java.exe" set "JAVA_EXE=%JAVA_HOME%\bin\java.exe"
if not defined JAVA_EXE set "JAVA_EXE=java"
if not exist extracted-app\BOOT-INF\lib (
    "%JAVA_EXE%" -Djarmode=tools -jar target\medical-crisis-response-1.0.0.jar extract --launcher --destination extracted-app --force
)
echo Starting RapidRelief server on http://localhost:9090
echo Please wait 15 seconds after this window starts.
echo Keep this terminal open while using the website.
"%JAVA_EXE%" -cp "target\classes;extracted-app\BOOT-INF\lib\*" com.rapidresponse.RapidResponseApplication --server.port=9090
pause

