---
page_title: "Vagrant 1.1, VMware Fusion"
title: "Vagrant 1.1, VMware Fusion"
---

I'm happy to announce the release and immediate availability of Vagrant 1.1
and the long-awaited [VMware Fusion provider](http://www.vagrantup.com/vmware),
allowing you to use Vagrant to control machines on top of the rock solid,
ultra performant VMware hypervisor.

This release introduces the concept of
[providers](http://docs.vagrantup.com/v2/providers/index.html),
which allows Vagrant to control machines on systems other than VirtualBox.
This marks the beginning of a new era for Vagrant, an era unconstrained
by the limitations of any specific provider.

The [VMware Fusion provider](http://www.vagrantup.com/vmware) is the first
paid add-on for Vagrant from HashiCorp. The Fusion provider has already been in use
with great success by hundreds of early testers looking for improved stability
and performance from their Vagrant environments.

Open source providers for [AWS](https://github.com/mitchellh/vagrant-aws)
and [RackSpace](https://github.com/mitchellh/vagrant-rackspace) are also
available today.

Vagrant 1.1 can be downloaded immediately from the [Vagrant website](http://www.vagrantup.com).
The Fusion provider can be purchased immediately from the
[VMware Fusion provider page](http://www.vagrantup.com/vmware).

READMORE

<hr>

## Vagrant 1.1

As promised, Vagrant 1.1 is
[backwards compatible](http://docs.vagrantup.com/v2/installation/backwards-compatibility.html)
with 1.0.x Vagrantfiles, as long as you're not using any plugins. Therefore,
Vagrant 1.1 is a drop-in replacement for 1.0.x.

The provider interface is fully open source and
[documented](http://docs.vagrantup.com/v2/plugins/providers.html),
allowing for plugins to implement new providers.
[AWS](https://github.com/mitchellh/vagrant-aws) and
[RackSpace Cloud](https://github.com/mitchellh/vagrant-rackspace) plugins
are already available and open source, and can be used as an example of a
high-quality Vagrant plugin that implements a provider.

Vagrant 1.1 is the first release on the way to 2.0. Just as the 0.x series
was experimental up until 1.0, the 1.x series will be experimental up until
2.0. This means that backwards incompatibilities to the 1.x releases _will_
be introduced, and will stabilize for 2.0. Backwards compatibility for
1.0.x will always be retained throughout the 1.x series up to and including 2.0.

A full, detailed changelog can be [found here](https://github.com/mitchellh/vagrant/blob/v1.1.0/CHANGELOG.md).

<hr>

## VMware Fusion Provider

<div class="align-center">
<a href="http://www.vagrantup.com/vmware" title="Vagrant + VMware">
<img alt="Vagrant + VMware" class="shadow" src="/images/blog/vagrant-1-1/vmware_hero.png">
</a>
</div>

The VMware Fusion provider allows you to
[reap the benefits of VMware technology](http://www.vagrantup.com/vmware-Ygz22xgb#learn-more)
using the same easy Vagrant workflow
you've come to know and love on top of VMware Fusion machines. The provider
supports Fusion 5, and works with the Fusion 5 trial, personal, and
professional versions.

In February, a [preview video of the provider](http://vimeo.com/hashicorp/vagrant-vmware-fusion-provider-preview)
was announced. You can view that today for an idea of what working with
the Fusion provider looks like.

This is the first paid add-on from [HashiCorp](http://www.hashicorp.com),
and is priced at $79 per seat. The details of what this mean are viewable
in the [purchase section](http://www.vagrantup.com/vmware#buy-now) of
the provider page.

Revenue and profit from the sale of the Fusion providers goes directly
towards the continued development of the Vagrant open source project.

Support for additional VMware products is forthcoming, and can be expected
to be licensed in a similar way.
