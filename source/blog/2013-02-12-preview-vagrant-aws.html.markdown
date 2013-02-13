---
title: "Preview: Vagrant AWS Provider"
---

Sponsored by [Vocalocity](http://www.vocalocity.com/),
HashiCorp has developed a fully open-source, MIT licensed AWS provider plugin
for Vagrant 1.1.

Using the same Vagrant workflow you've come to know and love, you will be able to
launch and provision instances in EC2 or VPC, just as you would a
VirtualBox machine today.

Paired with local virtualization, the AWS provider can vastly improve
your end-to-end workflow, unlocking use cases for Vagrant which simply didn't
exist before.

The provider will be released as open source at the same time as Vagrant 1.1,
and works on Mac, Windows, and Linux.
While no release date has been set, Vagrant 1.1 is targeted for later this
month.

READMORE

A [preview video](http://vimeo.com/hashicorp/vagrant-aws-provider-preview)
is embedded below so you can see the AWS provider in action.

<div class="vimeo">
  <iframe src="http://player.vimeo.com/video/59593338" width="630" height="354" frameborder="0" webkitAllowFullScreen="1" mozallowfullscreen="1" allowFullScreen="1">
  </iframe>
</div>

The true power of the Vagrant AWS integration comes when it is paired with
local virtualization. VirtualBox (or the upcoming
[VMware support](http://vimeo.com/hashicorp/vagrant-vmware-fusion-provider-preview)) should be used for local development as much as possible, while
AWS can satisy some additional use cases:

* Develop on a powerful EC2 instance when your local work machine just
  isn't enough, or when you need more development environments than
  local virtualization can handle on a single machine.

* Test your provisioning scripts in the actual environment where they'll
  be deployed for production.

* Use Vagrant to launch development, staging, and production environments.

Vagrant can use the same Vagrantfile -- with no modifications -- to
launch VirtualBox, AWS, and any other provider, so you can mix and match
the provider you use as you go. A future blog post will cover the Vagrant
1.1 provider system in-depth.

I'm very excited for the opportunities and use cases this unlocks, as
well as the potential to dramatically improve end-to-end productivity
and testability of your work environments.
