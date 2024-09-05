#!/bin/sh
cd ~ ;
mkdir -p sample;
cd sample ;
touch sample.txt ;
#next chmod cmd is only needed when script is runned multiple time as the permission 
# are revoke to read and write sample.txt later in script
chmod 600 sample.txt; 
echo "Hi! This is just a sample text file created using a shell script." > sample.txt ;
cat sample.txt ;
#grep to match the char in sample.txt file and output t or T in output
# then wc to count the line
grep -oi 't' sample.txt | wc -l ;
chmod u+rwx sample.txt ;
echo "Hi! This is just another sample text added to the file." >> sample.txt ;
# chmod g-wx sample.txt ;
chmod g+r-- sample.txt ;
chmod a-rwx sample.txt ;
touch sample2.txt
#as permission is denied for all users to even read file so we need to manually insert the content
echo "Hi! This is just a sample text file created using a shell script." > sample2.txt ;
echo "Hi! This is just another sample text added to the file.">> sample2.txt ;
# cp sample.txt sample2.txt ;
for i in {1..1000}; do echo "Random Line number $i" >> sample2.txt ; done ;
head -50 sample2.txt ;
tail -50 sample2.txt ;
touch prog1.txt prog2.txt program.txt code.txt info.txt;
ls *prog* ;
alias list_prog='ls *prog*';
list_prog ;
