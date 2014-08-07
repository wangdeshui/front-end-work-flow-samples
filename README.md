* Setup build.bat, the content is below

		grunt
		


* add below into Pre-build event command line of project settings

		''' bash
		CD $(SolutionDir)buildtasks\
		CALL build.bat
		'''



