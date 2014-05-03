# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "precise32"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.

  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-i386-vagrant-disk1.box" #http://files.vagrantup.com/precise32.box"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Don't boot with headless mode
  #   vb.gui = true
  #
  #   # Use VBoxManage to customize the VM. For example to change memory:
  #   vb.customize ["modifyvm", :id, "--memory", "1024"]
  # end
  #
  # View the documentation for the provider you're using for more
  # information on available options.

  # Enable provisioning with CFEngine. CFEngine Community packages are
  # automatically installed. For example, configure the host as a
  # policy server and optionally a policy file to run:
  #
  # config.vm.provision "cfengine" do |cf|
  #   cf.am_policy_hub = true
  #   # cf.run_file = "motd.cf"
  # end
  #
  # You can also configure and bootstrap a client to an existing
  # policy server:
  #
  # config.vm.provision "cfengine" do |cf|
  #   cf.policy_server_address = "10.0.2.15"
  # end

  # Enable provisioning with Puppet stand alone.  Puppet manifests
  # are contained in a directory path relative to this Vagrantfile.
  # You will need to create the manifests directory and a manifest in
  # the file default.pp in the manifests_path directory.
  #
  # config.vm.provision "puppet" do |puppet|
  #   puppet.manifests_path = "manifests"
  #   puppet.manifest_file  = "site.pp"
  # end

  # Enable provisioning with chef solo, specifying a cookbooks path, roles
  # path, and data_bags path (all relative to this Vagrantfile), and adding
  # some recipes and/or roles.
  #
  # config.vm.provision "chef_solo" do |chef|
  #   chef.cookbooks_path = "../my-recipes/cookbooks"
  #   chef.roles_path = "../my-recipes/roles"
  #   chef.data_bags_path = "../my-recipes/data_bags"
  #   chef.add_recipe "mysql"
  #   chef.add_role "web"
  #
  #   # You may also specify custom JSON attributes:
  #   chef.json = { :mysql_password => "foo" }
  # end

  # Enable provisioning with chef server, specifying the chef server URL,
  # and the path to the validation key (relative to this Vagrantfile).
  #
  # The Opscode Platform uses HTTPS. Substitute your organization for
  # ORGNAME in the URL and validation key.
  #
  # If you have your own Chef Server, use the appropriate URL, which may be
  # HTTP instead of HTTPS depending on your configuration. Also change the
  # validation key to validation.pem.
  #
  # config.vm.provision "chef_client" do |chef|
  #   chef.chef_server_url = "https://api.opscode.com/organizations/ORGNAME"
  #   chef.validation_key_path = "ORGNAME-validator.pem"
  # end
  #
  # If you're using the Opscode platform, your validator client is
  # ORGNAME-validator, replacing ORGNAME with your organization name.
  #
  # If you have your own Chef Server, the default validation client name is
  # chef-validator, unless you changed the configuration.
  #
  #   chef.validation_client_name = "ORGNAME-validator"

  dir = Dir.pwd
  vagrant_dir = File.expand_path(File.dirname(__FILE__))


  # Store the current version of Vagrant for use in conditionals when dealing
  # with possible backward compatible issues.
  vagrant_version = Vagrant::VERSION.sub(/^v/, '')

  # Configurations from 1.0.x can be placed in Vagrant 1.1.x specs like the following.
  config.vm.provider :virtualbox do |v|
    v.customize ["modifyvm", :id, "--memory", 512]
  end

  # Forward Agent
  #
  # Enable agent forwarding on vagrant ssh commands. This allows you to use identities
  # established on the host machine inside the guest. See the manual for ssh-add
  config.ssh.forward_agent = true

  config.vm.hostname = "vvv"

  # Local Machine Hosts
  #
  # If the Vagrant plugin hostsupdater (https://github.com/cogitatio/vagrant-hostsupdater) is
  # installed, the following will automatically configure your local machine's hosts file to
  # be aware of the domains specified below. Watch the provisioning script as you may be
  # required to enter a password for Vagrant to access your hosts file.
  #
  # By default, we'll include the domains setup by VVV through the vvv-hosts file
  # located in the www/ directory.
  #
  # Other domains can be automatically added by including a vvv-hosts file containing
  # individual domains separated by whitespace in subdirectories of www/.
  if defined? VagrantPlugins::HostsUpdater

    # Capture the paths to all vvv-hosts files under the www/ directory.
    paths = []
    Dir.glob(vagrant_dir + '/www/**/vvv-hosts').each do |path|
      paths << path
    end

    # Parse through the vvv-hosts files in each of the found paths and put the hosts
    # that are found into a single array.
    hosts = []
    paths.each do |path|
      new_hosts = []
      file_hosts = IO.read(path).split( "\n" )
      file_hosts.each do |line|
        if line[0..0] != "#"
          new_hosts << line
        end
      end
      hosts.concat new_hosts
    end

    # Pass the final hosts array to the hostsupdate plugin so it can perform magic.
    config.hostsupdater.aliases = hosts

  end

  # Default Box IP Address
  #
  # This is the IP address that your host will communicate to the guest through. In the
  # case of the default `192.168.50.4` that we've provided, Virtualbox will setup another
  # network adapter on your host machine with the IP `192.168.50.1` as a gateway.
  #
  # If you are already on a network using the 192.168.50.x subnet, this should be changed.
  # If you are running more than one VM through Virtualbox, different subnets should be used
  # for those as well. This includes other Vagrant boxes.
  config.vm.network :private_network, ip: "192.168.50.4" #*config.vm.synced_folder ".", "/home/core/share", id: "core", :nfs => true, :mount_options => ['nolock,vers=3,udp']*

  #Install docker
  config.vm.provision :shell, :inline => "sudo apt-get update"
  config.vm.provision :shell, :inline => "sudo apt-get install linux-image-generic-lts-raring linux-headers-generic-lts-raring -y"
  config.vm.provision :shell, :inline => "sudo apt-get install curl -y"
  config.vm.provision :shell, :inline => "curl -s https://get.docker.io/ubuntu/ | sudo sh"
  config.vm.provision :shell, :inline => "sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker" 
  config.vm.provision :shell, :inline => "sudo docker run -i -t ubuntu /bin/bash"
  #&& sudo apt-get install docker.io && sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker"

  #Get Docker Container
  #docker pull ubuntu

  #Create Container
  #docker run -name="dev" -t -i ubuntu /bin/bash

end