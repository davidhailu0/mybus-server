pipeline{
    agent {
        docker{
            image ""
            args ""
        }
    }
    stages{
        stage("Build"){
            steps{
                sh "npm install"
            }
        }
        stage("Test"){
            steps{
                sh "npm run ci:e2e"
            }
        }
        stage("Deploy"){
            steps{
                sh "npm run start"
            }
        }
    }
}