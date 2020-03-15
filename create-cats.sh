#!/bin/bash

cats=(\
	'{"name": "Jiji", "age": 2, "bread": "black"}' \
	'{"name": "Salem", "age": 100, "bread": "black"}' \
)

for i in ${!cats[*]}
do
	curl -i -X POST -H 'Content-Type: application/json' \
		-d "${cats[$i]}" localhost:8080/cats/
done
