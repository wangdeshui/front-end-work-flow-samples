* Setup build.bat, the content is below

		CMD /C npm install grunt-cli -g
		CMD /C npm install
		grunt
		


* add below into Pre-build event command line of project settings


		
		CD $(SolutionDir)buildtasks\
		CALL build.bat
		




