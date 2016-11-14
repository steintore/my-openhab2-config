An ansible playbook to install/update openHAB 2 on my Raspberry PI
===========================================================

This setup uses [Ansible](http://docs.ansible.com) to automate provisioning of a linux machine
containing a setup for [OpenHAB2](http://www.openhab.org) 


## Bootstrap and prereqs

1. Install ansible:
        * `sudo apt-get install -y ansible`
2. Clone this repo from the command line (in a directory of your choice):
   ```git clone https://github.com/steintore/my-openhab2-config.git```
3. `cd my-openhab2-config` into your cloned repo.
4. From the command line run: 
    To install everything:
	`ansible-playbook playbook.yml -i hosts --ask-vault-pass -vvvv --ask-sudo-pass`. 
    To update the OpenHAB2 configurations:
	`ansible-playbook updateOpenhab.yml -i hosts --ask-vault-pass -v --ask-sudo-pass`

Note! The repository contains file(s) encrypted using `ansible-vault` - in such files there are secrets - like binding keys etc. Without the passphrase to the encrypted files you cannot start the system - in other words you need to replace the files with your own encrypted files with your secrets - or remove the functionality.

After you are up and running, open a browser and point it to [openHAB2 http://localhost:8080](http://localhost:8080).

## Operations

### Deploying changes
Run the ansible command again. It will download some things all over again. I'm currently using my own github repo for the configurations as well, so i can `git pull` in the configurations folder.
