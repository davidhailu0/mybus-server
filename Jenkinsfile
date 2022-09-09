pipeline{
    agent {
        docker{
            image "davidhailu0/dockercomposedebian"
            args "-v /var/run/docker.sock:/var/run/docker.sock -u root --add-host=host.docker.internal:host-gateway"
        }
    }
    stages{
        stage("Build"){
            steps{
                sh "docker-compose build server"
                sh "docker-compose build test"
            }
        }
        stage("Test"){
            steps{
                sh "docker-compose run -d  --name=localserver server"
                sh "docker-compose run test"
            }
        }
        // stage("Deploy"){
        //     steps{
        //         sh "docker"
        //     }
        // }
    }
}
