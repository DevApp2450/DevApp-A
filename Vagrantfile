# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "raring"
  
  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.

  config.vm.box_url = "http://cloud-images.ubuntu.com/raring/current/raring-server-cloudimg-vagrant-amd64-disk1.box"
  
  #config.vm.network "private_network", ip: "192.168.50.4"

  config.vm.network :forwarded_port, host: 8880, guest: 80, auto_correct: true
  #config.vm.synced_folder "/vagrant", "/vagrant", owner: "root", group: "root"
  Vagrant::Config.run do |config|
    config.vm.customize ["modifyvm", :id, "--memory", 512]
  end
end