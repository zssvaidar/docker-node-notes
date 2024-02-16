node {

    currentBuild.result = "SUCCESS"

    try {
      // https://javadoc.jenkins.io/plugin/workflow-support/org/jenkinsci/plugins/workflow/support/steps/build/RunWrapper.html
      // RunWrapper	getPreviousBuild()	 
      // RunWrapper	getPreviousBuildInProgress()	 
      // RunWrapper	getPreviousBuiltBuild()	 
      // RunWrapper	getPreviousCompletedBuild()	 
      // RunWrapper	getPreviousFailedBuild()	 
      // RunWrapper	getPreviousNotFailedBuild()	 
      // RunWrapper	getPreviousSuccessfulBuild()
      stage('Cleanup'){
          cleanWs()
          def scmVars = checkout scm
          def build = currentBuild.getPreviousSuccessfulBuild()
          def LAST_COMMIT = build.getBuildVariables().get('CURRENT_COMMIT')

          def CURRENT_COMMIT = scmVars.GIT_COMMIT
          env.CURRENT_COMMIT = CURRENT_COMMIT
          env.LAST_COMMIT = LAST_COMMIT
      }

      stage('Test'){
        // environment {
        //   SOME_SECRET = credentials("SOME_SECRET") // AN_ACCESS_KEY = credentials('my-predefined-secret-text')
        // }
        // env.NODE_ENV = "test"
        // print "Environment will be : ${env.NODE_ENV}"

        // withCredentials([string(credentialsId: 'SOME_SECRET_2', variable: 'SOME_SECRET_2')]) {
        //   // withCredentials([usernamePassword(credentialsId: 'SOME_SECRET', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        //   // echo $SOME_SECRET_2
        //   // echo "username is $USERNAME"
        // }

        //  sh 'node -v'
      }

      // List of environment variables
      // http://ip/env-vars.html
      def values = "$JOB_NAME".tokenize( '/' )
      def PARENT_JOB_NAME = values[0]
      def DEFAULT_ARTIFACT_PATH = "$JENKINS_HOME/jobs/$PARENT_JOB_NAME/branches/${BRANCH_NAME}/builds/${BUILD_NUMBER}/archive"
      def artifact_name = "${BUILD_NUMBER}_${PARENT_JOB_NAME}_${BRANCH_NAME}_${env.CURRENT_COMMIT}.zip"
      def DEFAULT_ARTIFACT_FULL_PATH = "$DEFAULT_ARTIFACT_PATH/${artifact_name}"
      // Store artifact into default folder in build
      // zip zipFile: "$artifact_name", archive: true, glob: '**/*'

      stage('Build'){
        echo "JENKINS_HOME: $JENKINS_HOME"
        echo "WORKSPACE: $WORKSPACE"
        echo "CURRENT_COMMIT: ${env.CURRENT_COMMIT}"
        echo "LAST_COMMIT: ${env.LAST_COMMIT}"

        // If commit is the same
        // don't create new artifact, pass into env variables old artifact name
        if(env.CURRENT_COMMIT == env.LAST_COMMIT) {
          def build = currentBuild.getPreviousSuccessfulBuild()
          env.ARTIFACT_FULL_PATH = build.getBuildVariables().get('ARTIFACT_FULL_PATH')
        }
        else {
          env.ARTIFACT_FULL_PATH = "$JENKINS_HOME/artifacts/${JOB_NAME}/${artifact_name}"
          zip zipFile: "${artifact_name}", archive: true, glob: '**/*'
          // archiveArtifacts artifacts: "$JENKINS_HOME/artifacts/${JOB_NAME}/${artifact_name}"
          archiveArtifacts artifacts: '**/*.zip', fingerprint: true
        }
        echo "ARTIFACT_FULL_PATH: ${env.ARTIFACT_FULL_PATH}"

      }

      stage('Deploy'){
        // dest_artifacts_path = "/home/ansible/artifacts"
        // dest_env_path = "/home/ansible/env_file/file.der"

        // withCredentials([file(credentialsId: 'ENV_JARVIS', variable: 'envs'), ]) {

        //   ansiblePlaybook installation: 'ansible',\
        //       inventory: "${WORKSPACE}/ansible/etc/ansible/hosts",\
        //       limit: 'c2',\
        //       playbook: '${WORKSPACE}/ansible/playbook2.yml', vaultTmpPath: '',\
        //       extras: "\
        //               -e artifact_fullpath=${env.ARTIFACT_FULL_PATH}\
        //               -e dest_artifacts_path=$dest_artifacts_path\
        //               -e dest_env_path=$dest_env_path\
        //               -e ansible_become_password=123412\
        //               -e env_file=${envs}"
        // }

      }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

        //     mail body: "project build error is here: ${env.BUILD_URL}" ,
        //     from: 'xxxx@yyyy.com',
        //     replyTo: 'yyyy@yyyy.com',
        //     subject: 'project build failed',
        //     to: 'zzzz@yyyyy.com'

        throw err
    }

}
