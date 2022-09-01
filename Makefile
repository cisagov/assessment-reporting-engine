.PHONY: clean


#################################################################################
# COMMANDS                                                                      #
#################################################################################

## Delete all compiled Python files, and remove any generated zip, json, or word files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete
	find . -type f -name "*.json" -delete
	find . -type f -name "*.zip" -delete

	find . -type f -name "*.docx" -not -path  "*report_gen*" -delete
	find . -type f -name "*.pptx" -not -path  "*report_gen*" -delete
	rm -r ptportal/migrations/*
	touch ptportal/migrations/__init__.py
<<<<<<< HEAD
	rm mode.txt
=======

	rm ptportal.log
>>>>>>> development
