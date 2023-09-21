export const questions = {
  "101": [
    {
      "questionNumber": "1",
      "questionText": "\n\nWhich type of file system is created by mkfs when it is executed with the block device name only and\nwithout any additional parameters?\n\n",
      "choices": [
        {
          "text": "A. XFS",
          "selected": false
        },
        {
          "text": "B. VFAT",
          "selected": false
        },
        {
          "text": "C. ext2",
          "selected": false
        },
        {
          "text": "D. ext3",
          "selected": false
        },
        {
          "text": "E. ext4",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "2",
      "questionText": "\nWhich umask value ensures that new directories can be read, written and listed by their owning user,\nread and listed by their owning group and are not accessible at all for everyone else?\n\n",
      "choices": [
        {
          "text": "A. 0750",
          "selected": false
        },
        {
          "text": "B. 0027",
          "selected": false
        },
        {
          "text": "C. 0036",
          "selected": false
        },
        {
          "text": "D. 7640",
          "selected": false
        },
        {
          "text": "E. 0029",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "3",
      "questionText": "\nWhich of the following commands changes the number of days before the ext3 filesystem on /dev/sda1\nhas to run through a full filesystem check while booting?\n\n",
      "choices": [
        {
          "text": "A. tune2fs -d 200 /dev/sda1",
          "selected": false
        },
        {
          "text": "B. tune2fs -i 200 /dev/sda1",
          "selected": false
        },
        {
          "text": "C. tune2fs -c 200 /dev/sda1",
          "selected": false
        },
        {
          "text": "D. tune2fs -n 200 /dev/sda1",
          "selected": false
        },
        {
          "text": "E. tune2fs --days 200 /dev/sda1",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "4",
      "questionText": "\nWhich is the default percentage of reserved space for the root user on new ext4 filesystems?\n\n",
      "choices": [
        {
          "text": "A. 10%",
          "selected": false
        },
        {
          "text": "B. 3%",
          "selected": false
        },
        {
          "text": "C. 15%",
          "selected": false
        },
        {
          "text": "D. 0%",
          "selected": false
        },
        {
          "text": "E. 5%",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "5",
      "questionText": "\nWhich of the following is true when a file system, which is neither listed in /etc/fstab nor known to system,\nis mounted manually?\n\n",
      "choices": [
        {
          "text": "A. systemd ignores any manual mounts which are not done using the systemctl mount command",
          "selected": false
        },
        {
          "text": "B. The command systemctl mountsync can be used to create a mount unit based on the existing mount",
          "selected": false
        },
        {
          "text": "C. systemd automatically generates a mount unit and monitors the mount point without changing it",
          "selected": false
        },
        {
          "text": "D. Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time",
          "selected": false
        },
        {
          "text": "E. systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "6",
      "questionText": "\nWhich program updates the database that is used by the locate command? (Specify ONLY the command\nwithout any path or parameters).\n\n",
      "choices": [],
      "answer": "updatedb",
      "questionType": "input"
    },
    {
      "questionNumber": "7",
      "questionText": "\nWhat does the command mount --bind do?\n\n",
      "choices": [
        {
          "text": "A. It makes the contents of one directory available in another directory",
          "selected": false
        },
        {
          "text": "B. It mounts all available filesystems to the current directory",
          "selected": false
        },
        {
          "text": "C. It mounts all user mountable filesystems to the user’s home directory",
          "selected": false
        },
        {
          "text": "D. It mounts all file systems listed in /etc/fstab which have the option userbindset",
          "selected": false
        },
        {
          "text": "E. It permanently mounts a regular file to a directory",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "8",
      "questionText": "\nConsider the following output from the command ls -i:\n 525385 a.txt\nHow would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?\n\n",
      "choices": [
        {
          "text": "A. ln -h a.txt c.txt",
          "selected": false
        },
        {
          "text": "B. ln c.txt a.txt",
          "selected": false
        },
        {
          "text": "C. ln a.txt c.txt",
          "selected": false
        },
        {
          "text": "D. ln -f c.txt a.txt",
          "selected": false
        },
        {
          "text": "E. ln -i 525385 c.txt",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "9",
      "questionText": "\nConsider the following directory:\n drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales\nWhich command ensures new files created within the directory sales are owned by the group sales?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. chmod g+s sales",
          "selected": false
        },
        {
          "text": "B. setpol -R newgroup=sales sales",
          "selected": false
        },
        {
          "text": "C. chgrp -p sales sales",
          "selected": false
        },
        {
          "text": "D. chown --persistent *.sales sales",
          "selected": false
        },
        {
          "text": "E. chmod 2775 sales",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "10",
      "questionText": "\nIn order to display all currently mounted filesystems, which of the following commands could be used?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. cat /proc/self/mounts",
          "selected": false
        },
        {
          "text": "B. free",
          "selected": false
        },
        {
          "text": "C. lsmounts",
          "selected": false
        },
        {
          "text": "D. mount",
          "selected": false
        },
        {
          "text": "E. cat /proc/filesystems",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "11",
      "questionText": "\nWhich command displays the current disk space usage for all mounted file systems? (Specify ONLY the\ncommand without any path or parameters.)\n\n",
      "choices": [],
      "answer": "df",
      "questionType": "input"
    },
    {
      "questionNumber": "12",
      "questionText": "\nWhich chown command changes the ownership to dave and the group to staff on a file named\ndata.txt?\n\n",
      "choices": [
        {
          "text": "A. chown dave/staff data.txt",
          "selected": false
        },
        {
          "text": "B. chown -u dave -g staff data.txt",
          "selected": false
        },
        {
          "text": "C. chown --user dave --group staff data.txt",
          "selected": false
        },
        {
          "text": "D. chown dave+staff data.txt",
          "selected": false
        },
        {
          "text": "E. chown dave:staff data.txt",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "13",
      "questionText": "\nWhen considering the use of hard links, what are valid reasons not to use hard links?\n\n",
      "choices": [
        {
          "text": "A. Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
          "selected": false
        },
        {
          "text": "B. Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
          "selected": false
        },
        {
          "text": "C. Hard links are specific to one filesystem and cannot point to files on another filesystem",
          "selected": false
        },
        {
          "text": "D. If users other than root should be able to create hard links, suln has to be installed and configured",
          "selected": false
        },
        {
          "text": "E. When a hard linked file is changed, a copy of the file is created and consumes additional space",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "14",
      "questionText": "\nIn compliance with the FHS, in which of the directories are man pages found?\n\n",
      "choices": [
        {
          "text": "A. /opt/man/",
          "selected": false
        },
        {
          "text": "B. /usr/doc/",
          "selected": false
        },
        {
          "text": "C. /usr/share/man/",
          "selected": false
        },
        {
          "text": "D. /var/pkg/man",
          "selected": false
        },
        {
          "text": "E. /var/man/",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "15",
      "questionText": "\nWhich file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the\nfile name only without any path.)\n\n",
      "choices": [],
      "answer": "cmdline",
      "questionType": "input"
    },
    {
      "questionNumber": "16",
      "questionText": "\nWhat is the process ID number of the init process on a System V init based system?\n\n",
      "choices": [
        {
          "text": "A. -1",
          "selected": false
        },
        {
          "text": "B. 0",
          "selected": false
        },
        {
          "text": "C. 1",
          "selected": false
        },
        {
          "text": "D. It is different with each reboot",
          "selected": false
        },
        {
          "text": "E. It is set to the current run level",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "17",
      "questionText": "\nWhich daemon handles power management events on a Linux system?\n\n",
      "choices": [
        {
          "text": "A. acpid",
          "selected": false
        },
        {
          "text": "B. batteryd",
          "selected": false
        },
        {
          "text": "C. pwrmgntd",
          "selected": false
        },
        {
          "text": "D. psd",
          "selected": false
        },
        {
          "text": "E. inetd",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "18",
      "questionText": "\nWhich of the following statements are true about the boot sequence of a PC using a BIOS? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. Some parts of the boot process can be configured from the BIOS",
          "selected": false
        },
        {
          "text": "B. Linux does not require the assistance of the BIOS to boot a computer",
          "selected": false
        },
        {
          "text": "C. The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
          "selected": false
        },
        {
          "text": "D. The BIOS initiates the boot process after turning the computer on",
          "selected": false
        },
        {
          "text": "E. The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "19",
      "questionText": "\nWhat is true regarding UEFI firmware? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. It can read and interpret partition tables",
          "selected": false
        },
        {
          "text": "B. It can use and read certain file systems",
          "selected": false
        },
        {
          "text": "C. It stores its entire configuration on the /boot/ partition",
          "selected": false
        },
        {
          "text": "D. It is stored in a special area within the GPT metadata",
          "selected": false
        },
        {
          "text": "E. It is loaded from a fixed boot disk position",
          "selected": false
        }
      ],
      "answer": "AB",
      "questionType": "multiple"
    },
    {
      "questionNumber": "20",
      "questionText": "\nA faulty kernel module is causing issues with a network interface card.\nWhich of the following actions ensures that this module is not loaded automatically when the system\nboots?\n\n",
      "choices": [
        {
          "text": "A. Using lsmod --remove --autocleanwithout specifying the name of a specific module",
          "selected": false
        },
        {
          "text": "B. Using modinfo -kfollowed by the name of the offending module",
          "selected": false
        },
        {
          "text": "C. Using modprobe -rfollowed by the name of the offending module",
          "selected": false
        },
        {
          "text": "D. Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf",
          "selected": false
        },
        {
          "text": "E. Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "21",
      "questionText": "\nWhen is the content of the kernel ring buffer reset? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. When the ring buffer is explicitly reset using the command dmesg --clear",
          "selected": false
        },
        {
          "text": "B. When the ring buffer is read using dmesg without any additional parameters",
          "selected": false
        },
        {
          "text": "C. When a configurable amount of time, 15 minutes by default, has passed",
          "selected": false
        },
        {
          "text": "D. When the kernel loads a previously unloaded kernel module",
          "selected": false
        },
        {
          "text": "E. When the system is shut down or rebooted",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "22",
      "questionText": "\nWhat is the first program the Linux kernel starts at boot time when using System V init?\n\n",
      "choices": [
        {
          "text": "A. /lib/init.so",
          "selected": false
        },
        {
          "text": "B. /proc/sys/kernel/init",
          "selected": false
        },
        {
          "text": "C. /etc/rc.d/rcinit",
          "selected": false
        },
        {
          "text": "D. /sbin/init",
          "selected": false
        },
        {
          "text": "E. /boot/init",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "23",
      "questionText": "\nA Debian package creates several files during its installation.\nWhich of the following commands searches for packages owning the file /etc/debian_version?\n\n",
      "choices": [
        {
          "text": "A. apt-get search /etc/debian_version",
          "selected": false
        },
        {
          "text": "B. apt -r /etc/debian_version",
          "selected": false
        },
        {
          "text": "C. find /etc/debian_version -dpkg",
          "selected": false
        },
        {
          "text": "D. dpkg -S  /etc/debian_version",
          "selected": false
        },
        {
          "text": "E. apt-file /etc/debian_version",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "24",
      "questionText": "\nWhat is contained on the EFI System Partition?\n\n",
      "choices": [
        {
          "text": "A. The Linux root file system",
          "selected": false
        },
        {
          "text": "B. The first stage boot loader",
          "selected": false
        },
        {
          "text": "C. The default swap space file",
          "selected": false
        },
        {
          "text": "D. The Linux default shell binaries",
          "selected": false
        },
        {
          "text": "E. The user home directories",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "25",
      "questionText": "\nWhich of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. ~/.lib64/",
          "selected": false
        },
        {
          "text": "B. /usr/lib64/",
          "selected": false
        },
        {
          "text": "C. /var/lib64/",
          "selected": false
        },
        {
          "text": "D. /lib64/",
          "selected": false
        },
        {
          "text": "E. /opt/lib64/",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "26",
      "questionText": "\nWhich of the following files exist in a standard GRUB 2 installation? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. /boot/grub/stages/stage0",
          "selected": false
        },
        {
          "text": "B. /boot/grub/i386-pc/lvm.mod",
          "selected": false
        },
        {
          "text": "C. /boot/grub/fstab",
          "selected": false
        },
        {
          "text": "D. /boot/grub/grub.cfg",
          "selected": false
        },
        {
          "text": "E. /boot/grub/linux/vmlinuz",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "27",
      "questionText": "\nWhich of the following commands installs all packages with a name ending with the string foo?\n\n",
      "choices": [
        {
          "text": "A. zypper get \"*foo\"",
          "selected": false
        },
        {
          "text": "B. zypper update \"foo?\"",
          "selected": false
        },
        {
          "text": "C. zypper force \"foo*\"",
          "selected": false
        },
        {
          "text": "D. zypper install \"*foo\"",
          "selected": false
        },
        {
          "text": "E. zypper add \".*foo\"",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "28",
      "questionText": "\nWhich of the following properties of a Linux system should be changed when a virtual machine is\ncloned? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. The partitioning scheme",
          "selected": false
        },
        {
          "text": "B. The file system",
          "selected": false
        },
        {
          "text": "C. The D-Bus Machine ID",
          "selected": false
        },
        {
          "text": "D. The permissions of /root/",
          "selected": false
        },
        {
          "text": "E. The SSH host keys",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "29",
      "questionText": "\nWhich of the following commands installs GRUB 2 into the master boot record on the third hard disk?\n\n",
      "choices": [
        {
          "text": "A. grub2 install /dev/sdc",
          "selected": false
        },
        {
          "text": "B. grub-mkrescue /dev/sdc",
          "selected": false
        },
        {
          "text": "C. grub-mbrinstall /dev/sdc",
          "selected": false
        },
        {
          "text": "D. grub-setup /dev/sdc",
          "selected": false
        },
        {
          "text": "E. grub-install /dev/sdc",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "30",
      "questionText": "\nWhich of the following partition types is used for Linux swap spaces when partitioning hard disk\ndrives?\n\n",
      "choices": [
        {
          "text": "A. 7",
          "selected": false
        },
        {
          "text": "B. 82",
          "selected": false
        },
        {
          "text": "C. 83",
          "selected": false
        },
        {
          "text": "D. 8e",
          "selected": false
        },
        {
          "text": "E. fd",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "31",
      "questionText": "\nWhat is true regarding the configuration of yum? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Changes to the repository configuration become active after running yum confupdate",
          "selected": false
        },
        {
          "text": "B. Changes to the yum configuration become active after restarting the yumd service",
          "selected": false
        },
        {
          "text": "C. The configuration of package repositories can be divided into multiple files",
          "selected": false
        },
        {
          "text": "D. Repository configurations can include variables such as $basearch or $releasever",
          "selected": false
        },
        {
          "text": "E. In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored",
          "selected": false
        }
      ],
      "answer": "CD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "32",
      "questionText": "\nWhich of the following apt-get subcommands installs the newest versions of all currently installed\npackages?\n\n",
      "choices": [
        {
          "text": "A. auto-update",
          "selected": false
        },
        {
          "text": "B. dist-upgrade",
          "selected": false
        },
        {
          "text": "C. full-upgrade",
          "selected": false
        },
        {
          "text": "D. install",
          "selected": false
        },
        {
          "text": "E. update",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "33",
      "questionText": "\nWhich command uninstalls a package but keeps its configuration files in case the package is\nre-installed?\n\n",
      "choices": [
        {
          "text": "A. dpkg -s pkgname",
          "selected": false
        },
        {
          "text": "B. dpkg -L pkgname",
          "selected": false
        },
        {
          "text": "C. dpkg -P pkgname",
          "selected": false
        },
        {
          "text": "D. dpkg -v pkgname",
          "selected": false
        },
        {
          "text": "E. dpkg -r pkgname",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "34",
      "questionText": "\nWhich of the following commands lists the dependencies of the RPM package file foo.rpm?\n\n",
      "choices": [
        {
          "text": "A. rpm -qpR foo.rpm",
          "selected": false
        },
        {
          "text": "B. rpm -dep foo",
          "selected": false
        },
        {
          "text": "C. rpm -ld foo.rpm",
          "selected": false
        },
        {
          "text": "D. rpm -R foo.rpm",
          "selected": false
        },
        {
          "text": "E. rpm -pD foo",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "35",
      "questionText": "\nWhat is the maximum niceness value that a regular user can assign to a process with the nice\ncommand when executing a new process?\n\n",
      "choices": [
        {
          "text": "A. 9",
          "selected": false
        },
        {
          "text": "B. 15",
          "selected": false
        },
        {
          "text": "C. 19",
          "selected": false
        },
        {
          "text": "D. 49",
          "selected": false
        },
        {
          "text": "E. 99",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "36",
      "questionText": "\nWhich of the following commands list all files and directories within the /tmp/ directory and its\nsubdirectories which are owned by the user root? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. find /tmp -user root -print",
          "selected": false
        },
        {
          "text": "B. find -path /tmp -uid root",
          "selected": false
        },
        {
          "text": "C. find /tmp -uid root -print",
          "selected": false
        },
        {
          "text": "D. find /tmp -user root",
          "selected": false
        },
        {
          "text": "E. find -path /tmp -user root -print",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "37",
      "questionText": "\nWhich of the following are valid stream redirection operators within Bash? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. <",
          "selected": false
        },
        {
          "text": "B. #>",
          "selected": false
        },
        {
          "text": "C. %>",
          "selected": false
        },
        {
          "text": "D. >>>",
          "selected": false
        },
        {
          "text": "E. 2>&1",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "38",
      "questionText": "\nWhich of the following vi commands deletes two lines, the current and the following line?\n\n",
      "choices": [
        {
          "text": "A. d2",
          "selected": false
        },
        {
          "text": "B. 2d",
          "selected": false
        },
        {
          "text": "C. 2dd",
          "selected": false
        },
        {
          "text": "D. dd2",
          "selected": false
        },
        {
          "text": "E. de12",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "39",
      "questionText": "\nThe command dbmaint & was used to run dbmaint in the background.\nHowever, dbmaint is terminated after logging out of the system.\nWhich alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the\nprogram, logs out?\n\n",
      "choices": [
        {
          "text": "A. job -b dmaint",
          "selected": false
        },
        {
          "text": "B. dbmaint &>/dev/pts/null",
          "selected": false
        },
        {
          "text": "C. nohup dbmaint &",
          "selected": false
        },
        {
          "text": "D. bg dbmaint",
          "selected": false
        },
        {
          "text": "E. wait dbmaint",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "40",
      "questionText": "\nFrom a Bash shell, which of the following commands directly execute the instructions from the file\n/usr/local/bin/runme.sh without starting a subshell? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. source /usr/local/bin/runme.sh",
          "selected": false
        },
        {
          "text": "B. /usr/local/bin/runme.sh",
          "selected": false
        },
        {
          "text": "C. /bin/bash /usr/local/bin/runme.sh",
          "selected": false
        },
        {
          "text": "D. .  /usr/local/bin/runme.sh",
          "selected": false
        },
        {
          "text": "E. run /usr/local/bin/runme.sh",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "41",
      "questionText": "\nWhich program runs a command in specific intervals and refreshes the display of the program’s output?\n(Specify ONLY the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "watch",
      "questionType": "input"
    },
    {
      "questionNumber": "42",
      "questionText": "\nImmediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single\ncharacter command will insert the deleted content below the current line?\n\n",
      "choices": [
        {
          "text": "A. i (lowercase)",
          "selected": false
        },
        {
          "text": "B. p (lowercase)",
          "selected": false
        },
        {
          "text": "C. P (uppercase)",
          "selected": false
        },
        {
          "text": "D. U (uppercase)",
          "selected": false
        },
        {
          "text": "E. u (lowercase)",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "43",
      "questionText": "\nWhich of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux\nstandard LF line breaks and stores the result in newlist.txt?\n\n",
      "choices": [
        {
          "text": "A. tr -d '\\r' < userlist.txt > newlist.txt",
          "selected": false
        },
        {
          "text": "B. tr -c '\\n\\r' '' <newlist.txt> userlist.txt",
          "selected": false
        },
        {
          "text": "C. tr '\\r\\n' '' <userlist.txt> newlist.txt",
          "selected": false
        },
        {
          "text": "D. tr '\\r' '\\n' userlist.txt newlist.txt",
          "selected": false
        },
        {
          "text": "E. tr -s '/^M/^J/' userlist.txt newlist.txt",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "44",
      "questionText": "\nGiven the following input stream:\n txt1.txt \n atxt.txt \n txtB.txt\nWhich of the following regular expressions turns this input stream into the following output stream?\n txt1.bak.txt \n atxt.bak.txt \n txtB.bak.txt\n\n",
      "choices": [
        {
          "text": "A. s/^.txt/.bak/",
          "selected": false
        },
        {
          "text": "B. s/txt/bak.txt/",
          "selected": false
        },
        {
          "text": "C. s/txt$/bak.txt/",
          "selected": false
        },
        {
          "text": "D. s/^txt$/.bak^/",
          "selected": false
        },
        {
          "text": "E. s/[.txt]/.bak$1/",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "45",
      "questionText": "\nWhich command must be entered before exiting vi to save the current file as filea.txt?\n\n",
      "choices": [
        {
          "text": "A. %s filea.txt",
          "selected": false
        },
        {
          "text": "B. %w filea.txt",
          "selected": false
        },
        {
          "text": "C. :save filea.txt",
          "selected": false
        },
        {
          "text": "D. :w filea.txt",
          "selected": false
        },
        {
          "text": "E. :s filea.txt",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "46",
      "questionText": "\nWhich of the following signals is sent to a process when the key combination Ctrl+C is pressed on the\nkeyboard?\n\n",
      "choices": [
        {
          "text": "A. SIGTERM",
          "selected": false
        },
        {
          "text": "B. SIGCONT",
          "selected": false
        },
        {
          "text": "C. SIGSTOP",
          "selected": false
        },
        {
          "text": "D. SIGKILL",
          "selected": false
        },
        {
          "text": "E. SIGINT",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "47",
      "questionText": "\nWhich of the following commands displays the output of the foo command on the screen and also\nwrites it to a file called /tmp/foodata?\n\n",
      "choices": [
        {
          "text": "A. foo | less /tmp/foodata",
          "selected": false
        },
        {
          "text": "B. foo | cp /tmp/foodata",
          "selected": false
        },
        {
          "text": "C. foo > /tmp/foodata",
          "selected": false
        },
        {
          "text": "D. foo | tee /tmp/foodata",
          "selected": false
        },
        {
          "text": "E. foo > stdout >> /tmp/foodata",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "48",
      "questionText": "\nWhat output will be displayed when the user fred executes the following command?\n  echo 'fred $USER’\n\n",
      "choices": [
        {
          "text": "A. fred fred",
          "selected": false
        },
        {
          "text": "B. fred /home/fred/",
          "selected": false
        },
        {
          "text": "C. 'fred $USER’",
          "selected": false
        },
        {
          "text": "D. fred $USER",
          "selected": false
        },
        {
          "text": "E. 'fred fred’",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "49",
      "questionText": "\nWhich of the following commands displays the path to the executable file that would be executed when\nthe command foo is invoked?\n\n",
      "choices": [
        {
          "text": "A. lsattr foo",
          "selected": false
        },
        {
          "text": "B. apropos foo",
          "selected": false
        },
        {
          "text": "C. locate foo",
          "selected": false
        },
        {
          "text": "D. whatis foo",
          "selected": false
        },
        {
          "text": "E. which foo",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "50",
      "questionText": "\nWhen redirecting the output of find to the xargs command, what option to find is useful if the filenames\ncontain spaces?\n\n",
      "choices": [
        {
          "text": "A. -rep-space",
          "selected": false
        },
        {
          "text": "B. -printnul",
          "selected": false
        },
        {
          "text": "C. -nospace",
          "selected": false
        },
        {
          "text": "D. -ignore-space",
          "selected": false
        },
        {
          "text": "E. -print0",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "51",
      "questionText": "\nWhich of the following commands can be used to determine how long the system has been running?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. uptime",
          "selected": false
        },
        {
          "text": "B. up",
          "selected": false
        },
        {
          "text": "C. time --up",
          "selected": false
        },
        {
          "text": "D. uname -u",
          "selected": false
        },
        {
          "text": "E. top",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "52",
      "questionText": "\nWhat is true regarding the command\n  ls > files \nif files does not exist?\n\n",
      "choices": [
        {
          "text": "A. The output of ls is printed to the terminal",
          "selected": false
        },
        {
          "text": "B. files is created and contains the output of ls",
          "selected": false
        },
        {
          "text": "C. An error message is shown and ls is not executed",
          "selected": false
        },
        {
          "text": "D. The command files is executed and receives the output of ls",
          "selected": false
        },
        {
          "text": "E. Any output of ls is discarded",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "53",
      "questionText": "\nWhich of the following files, located in a user’s home directory, contains the Bash history?\n\n",
      "choices": [
        {
          "text": "A. .bashrc_history",
          "selected": false
        },
        {
          "text": "B. .bash_histfile",
          "selected": false
        },
        {
          "text": "C. .history",
          "selected": false
        },
        {
          "text": "D. .bash_history",
          "selected": false
        },
        {
          "text": "E. .history_bash",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "54",
      "questionText": "\nWhich wildcards will match the following filenames? (Choose two.)\n ttyS0\n ttyS1\n ttyS2\n\n",
      "choices": [
        {
          "text": "A. ttyS[1-5]",
          "selected": false
        },
        {
          "text": "B. tty?[0-5]",
          "selected": false
        },
        {
          "text": "C. tty*2",
          "selected": false
        },
        {
          "text": "D. tty[A-Z][012]",
          "selected": false
        },
        {
          "text": "E. tty[Ss][02]",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "55",
      "questionText": "\nWhich of the following commands redirects the output of ls to standard error?\n\n",
      "choices": [
        {
          "text": "A. ls >-1",
          "selected": false
        },
        {
          "text": "B. ls <<ERR",
          "selected": false
        },
        {
          "text": "C. ls >&2",
          "selected": false
        },
        {
          "text": "D. ls >>2",
          "selected": false
        },
        {
          "text": "E. ls |error",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "56",
      "questionText": "\nWhich of the following commands displays the contents of a gzip compressed tar archive?\n\n",
      "choices": [
        {
          "text": "A. gzip archive.tgz | tar xvf",
          "selected": false
        },
        {
          "text": "B. tar -fzt archive.tgz",
          "selected": false
        },
        {
          "text": "C. gzip -d archive.tgz | tar tvf",
          "selected": false
        },
        {
          "text": "D. tar cf archive.tgz",
          "selected": false
        },
        {
          "text": "E. tar ztf archive.tgz",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "57",
      "questionText": "\nWhich of the following commands prints a list of usernames (first column) and their primary group\n(fourth column) from the /etc/passwd file?\n\n",
      "choices": [
        {
          "text": "A. fmt -f 1,4 /etc/passwd",
          "selected": false
        },
        {
          "text": "B. cut -d : -f 1,4 /etc/passwd",
          "selected": false
        },
        {
          "text": "C. sort -t : -k 1,4 /etc/passwd",
          "selected": false
        },
        {
          "text": "D. paste -f 1,4 /etc/passwd",
          "selected": false
        },
        {
          "text": "E. split -c 1,4 /etc/passwd",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "58",
      "questionText": "\nWhich of the following regular expressions represents a single upper-case letter?\n\n",
      "choices": [
        {
          "text": "A. :UPPER:",
          "selected": false
        },
        {
          "text": "B. [A-Z]",
          "selected": false
        },
        {
          "text": "C. !a-z",
          "selected": false
        },
        {
          "text": "D. %C",
          "selected": false
        },
        {
          "text": "E. {AZ}",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "59",
      "questionText": "\nWhich command is used to start another command with a given nice level? (Specify ONLY the command\nwithout any path or parameters.)\n\n",
      "choices": [],
      "answer": "nice",
      "questionType": "input"
    },
    {
      "questionNumber": "60",
      "questionText": "\nGiven a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters\nout all log entries in the time period between 8:00 am and 8:59 am?\n\n",
      "choices": [
        {
          "text": "A. grep -E ':08:[09]+:[09]+’ loga.log",
          "selected": false
        },
        {
          "text": "B. grep -E ':08:[00]+’ loga.log",
          "selected": false
        },
        {
          "text": "C. grep -E loga.log ':08:[0-9]+:[0-9]+’",
          "selected": false
        },
        {
          "text": "D. grep loga.log ':08:[0-9]:[0-9]’",
          "selected": false
        },
        {
          "text": "E. grep -E ':08:[0-9]+:[0-9]+’ loga.log",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "61",
      "questionText": "\nInstead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to\nidentify the intended partition? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. LABEL",
          "selected": false
        },
        {
          "text": "B. ID",
          "selected": false
        },
        {
          "text": "C. FIND",
          "selected": false
        },
        {
          "text": "D. NAME",
          "selected": false
        },
        {
          "text": "E. UUID",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "62",
      "questionText": "\nA yum repository can declare sets of related packages.\nWhich yum command installs all packages belonging to the group admintools?\n\n",
      "choices": [
        {
          "text": "A. yum pkgsel --install admintools",
          "selected": false
        },
        {
          "text": "B. yum install admintools/*",
          "selected": false
        },
        {
          "text": "C. yum groupinstall admintools",
          "selected": false
        },
        {
          "text": "D. yum taskinstall admintools",
          "selected": false
        },
        {
          "text": "E. yum collection install admintools",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "63",
      "questionText": "\nWhat directory contains configuration files for additional yum repositories? (Specify the full path to the\ndirectory.)\n\n",
      "choices": [],
      "answer": "/etc/yum.repos.d",
      "questionType": "input"
    },
    {
      "questionNumber": "64",
      "questionText": "\nWhich of the following commands installs the GRUB boot files into the currently active file systems and\nthe boot loader into the first partition of the first disk?\n\n",
      "choices": [
        {
          "text": "A. grub-install /dev/sda",
          "selected": false
        },
        {
          "text": "B. grub-install /dev/sda1",
          "selected": false
        },
        {
          "text": "C. grub-install current /dev/sda0",
          "selected": false
        },
        {
          "text": "D. grub-install /dev/sda0",
          "selected": false
        },
        {
          "text": "E. grub-install current /dev/sda1",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "65",
      "questionText": "\nWhich of the following files are found in the /boot/ filesystem? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Linux kernel images",
          "selected": false
        },
        {
          "text": "B. Bash shell binaries",
          "selected": false
        },
        {
          "text": "C. systemd target and service units",
          "selected": false
        },
        {
          "text": "D. Initial ramdisk images",
          "selected": false
        },
        {
          "text": "E. fsck binaries",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "66",
      "questionText": "\nWhich file defines the network locations from where the Debian package manager downloads software\npackages?\n\n",
      "choices": [
        {
          "text": "A. /etc/dpkg/dpkg.cfg",
          "selected": false
        },
        {
          "text": "B. /etc/apt/apt.conf.d",
          "selected": false
        },
        {
          "text": "C. /etc/apt/apt.conf",
          "selected": false
        },
        {
          "text": "D. /etc/dpkg/dselect.cfg",
          "selected": false
        },
        {
          "text": "E. /etc/apt/sources.list",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "67",
      "questionText": "\nWhen removing a package on a system using dpkg package management, which dpkg option ensures\nconfiguration files are removed as well?\n\n",
      "choices": [
        {
          "text": "A. --clean",
          "selected": false
        },
        {
          "text": "B. --purge",
          "selected": false
        },
        {
          "text": "C. --vacuum",
          "selected": false
        },
        {
          "text": "D. --remove",
          "selected": false
        },
        {
          "text": "E. --declare",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "68",
      "questionText": "\nWhich of the following statements are correct when comparing Linux containers with traditional virtual\nmachines (e.g. LXC vs. KVM)? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.",
          "selected": false
        },
        {
          "text": "B. Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.",
          "selected": false
        },
        {
          "text": "C. Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.",
          "selected": false
        },
        {
          "text": "D. The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.",
          "selected": false
        },
        {
          "text": "E. Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.",
          "selected": false
        }
      ],
      "answer": "ABD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "69",
      "questionText": "\nThe installation of a local Debian package failed due to unsatisfied dependencies.\nWhich of the following commands installs missing dependencies and completes the interrupted package\ninstallation?\n\n",
      "choices": [
        {
          "text": "A. dpkg --fix --all",
          "selected": false
        },
        {
          "text": "B. apt-get autoinstall",
          "selected": false
        },
        {
          "text": "C. dpkg-reconfigure --all",
          "selected": false
        },
        {
          "text": "D. apt-get all",
          "selected": false
        },
        {
          "text": "E. apt-get install -f",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "70",
      "questionText": "\nWhich of the following commands lists all currently installed packages when using RPM package\nmanagement?\n\n",
      "choices": [
        {
          "text": "A. yum --query --all",
          "selected": false
        },
        {
          "text": "B. yum --list --installed",
          "selected": false
        },
        {
          "text": "C. rpm --query --list",
          "selected": false
        },
        {
          "text": "D. rpm --list --installed",
          "selected": false
        },
        {
          "text": "E. rpm --query --all",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "71",
      "questionText": "\nWhich of the following commands are valid in the GRUB 2 configuration file? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. menuentry",
          "selected": false
        },
        {
          "text": "B. uefi",
          "selected": false
        },
        {
          "text": "C. pxe-ifconfig",
          "selected": false
        },
        {
          "text": "D. insmod",
          "selected": false
        },
        {
          "text": "E. kpartx",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "72",
      "questionText": "\nWhat is the purpose of the ldd command?\n\n",
      "choices": [
        {
          "text": "A. It lists which shared libraries a binary needs to run.",
          "selected": false
        },
        {
          "text": "B. It installs and updates installed shared libraries.",
          "selected": false
        },
        {
          "text": "C. It turns a dynamically linked binary into a static binary.",
          "selected": false
        },
        {
          "text": "D. It defines which version of a library should be used by default.",
          "selected": false
        },
        {
          "text": "E. It runs a binary with an alternate library search path.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "73",
      "questionText": "\nWhat can the Logical Volume Manager (LVM) be used for? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. To create snapshots.",
          "selected": false
        },
        {
          "text": "B. To dynamically change the size of logical volumes.",
          "selected": false
        },
        {
          "text": "C. To dynamically create or delete logical volumes.",
          "selected": false
        },
        {
          "text": "D. To create RAID 9 arrays.",
          "selected": false
        },
        {
          "text": "E. To encrypt logical volumes.",
          "selected": false
        }
      ],
      "answer": "ABC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "74",
      "questionText": "\nWhat are the main differences between GPT and MBR partition tables regarding maximum number\nand size of partitions? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.",
          "selected": false
        },
        {
          "text": "B. By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.",
          "selected": false
        },
        {
          "text": "C. By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.",
          "selected": false
        },
        {
          "text": "D. MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.",
          "selected": false
        },
        {
          "text": "E. Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "75",
      "questionText": "\nA backup software heavily uses hard links between files which have not been changed in between two\nbackup runs.\nWhich benefits are realized due to these hard links? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.",
          "selected": false
        },
        {
          "text": "B. The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.",
          "selected": false
        },
        {
          "text": "C. The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.",
          "selected": false
        },
        {
          "text": "D. The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.",
          "selected": false
        },
        {
          "text": "E. The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.",
          "selected": false
        }
      ],
      "answer": "DE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "76",
      "questionText": "\nWhich file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full\nname of the file, including path.)\n\n",
      "choices": [],
      "answer": "/proc/mounts",
      "questionType": "input"
    },
    {
      "questionNumber": "77",
      "questionText": "\nHow many fields are in a syntactically correct line of /etc/fstab?\n\n",
      "choices": [
        {
          "text": "A. 3",
          "selected": false
        },
        {
          "text": "B. 4",
          "selected": false
        },
        {
          "text": "C. 5",
          "selected": false
        },
        {
          "text": "D. 6",
          "selected": false
        },
        {
          "text": "E. 7",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "78",
      "questionText": "\nRunning chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission.\nWhat might be a reason why chmod cannot modify the permissions? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.",
          "selected": false
        },
        {
          "text": "B. filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.",
          "selected": false
        },
        {
          "text": "C. filea.txt has the sticky bit set and a regular user cannot remove this permission.",
          "selected": false
        },
        {
          "text": "D. filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.",
          "selected": false
        },
        {
          "text": "E. filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.",
          "selected": false
        }
      ],
      "answer": "AB",
      "questionType": "multiple"
    },
    {
      "questionNumber": "79",
      "questionText": "\nWhich of the following Linux filesystems preallocate a fixed number of inodes when creating a new\nfilesystem instead of generating them as needed? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. JFS",
          "selected": false
        },
        {
          "text": "B. ext3",
          "selected": false
        },
        {
          "text": "C. XFS",
          "selected": false
        },
        {
          "text": "D. ext2",
          "selected": false
        },
        {
          "text": "E. procfs",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "80",
      "questionText": "\nWhich of the following commands sets the SetUID permission on the executable /bin/foo?\n\n",
      "choices": [
        {
          "text": "A. chmod 4755 /bin/foo",
          "selected": false
        },
        {
          "text": "B. chmod 1755 /bin/foo",
          "selected": false
        },
        {
          "text": "C. chmod u-s /bin/foo",
          "selected": false
        },
        {
          "text": "D. chmod 755+s /bin/foo",
          "selected": false
        },
        {
          "text": "E. chmod 2755 /bin/foo",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "81",
      "questionText": "\nWhich of the following commands can be used to display the inode number of a given file? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. inode",
          "selected": false
        },
        {
          "text": "B. ln",
          "selected": false
        },
        {
          "text": "C. ls",
          "selected": false
        },
        {
          "text": "D. cp",
          "selected": false
        },
        {
          "text": "E. stat",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "82",
      "questionText": "\nWhich of the following settings for umask ensures that new files have the default permissions -rw-r-----?\n\n",
      "choices": [
        {
          "text": "A. 0017",
          "selected": false
        },
        {
          "text": "B. 0640",
          "selected": false
        },
        {
          "text": "C. 0038",
          "selected": false
        },
        {
          "text": "D. 0227",
          "selected": false
        },
        {
          "text": "E. 0027",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "83",
      "questionText": "\nAfter a power outage, the XFS file system of /dev/sda3 is inconsistent.\nHow can the existing file system errors be fixed?\n\n",
      "choices": [
        {
          "text": "A. By using mount -f to force a mount of the file system",
          "selected": false
        },
        {
          "text": "B. By running xfsck on the file system",
          "selected": false
        },
        {
          "text": "C. By mounting the file system with the option xfs_repair",
          "selected": false
        },
        {
          "text": "D. By running xfsadmin repairon the file system",
          "selected": false
        },
        {
          "text": "E. By running xfs_repair on the file system",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "84",
      "questionText": "\nWhich of the following properties of an existing file changes when a hard link pointing to that file is\ncreated?\n\n",
      "choices": [
        {
          "text": "A. File size",
          "selected": false
        },
        {
          "text": "B. Link count",
          "selected": false
        },
        {
          "text": "C. Modify timestamp",
          "selected": false
        },
        {
          "text": "D. Inode number",
          "selected": false
        },
        {
          "text": "E. Permissions",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "85",
      "questionText": "\nFollowing the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by\nthe system administrator be placed in order to be made available to all users on the system? (Specify the\nfull path to the directory.)\n\n",
      "choices": [],
      "answer": "/usr/local/bin",
      "questionType": "input"
    },
    {
      "questionNumber": "86",
      "questionText": "\nWhich of the following commands show how the shell handles a specific command?\n\n",
      "choices": [
        {
          "text": "A. where",
          "selected": false
        },
        {
          "text": "B. type",
          "selected": false
        },
        {
          "text": "C. stat",
          "selected": false
        },
        {
          "text": "D. case",
          "selected": false
        },
        {
          "text": "E. fileinfo",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "87",
      "questionText": "\nWhen in Normal mode in vi, which character can be used to begin a reverse search of the text?\n\n",
      "choices": [
        {
          "text": "A. r",
          "selected": false
        },
        {
          "text": "B. /",
          "selected": false
        },
        {
          "text": "C. F",
          "selected": false
        },
        {
          "text": "D. ?",
          "selected": false
        },
        {
          "text": "E. s",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "88",
      "questionText": "\nWhich of the following commands displays the manual page command from section 1?\n\n",
      "choices": [
        {
          "text": "A. man command(1)",
          "selected": false
        },
        {
          "text": "B. man command@1",
          "selected": false
        },
        {
          "text": "C. man 1 command",
          "selected": false
        },
        {
          "text": "D. man 1.command",
          "selected": false
        },
        {
          "text": "E. man -s 1 command",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "89",
      "questionText": "\nWhich of the following commands creates or, in case it already exists, overwrites a file called data with\nthe output of ls?\n\n",
      "choices": [
        {
          "text": "A. ls 3> data",
          "selected": false
        },
        {
          "text": "B. ls >& data",
          "selected": false
        },
        {
          "text": "C. ls > data",
          "selected": false
        },
        {
          "text": "D. ls >> data",
          "selected": false
        },
        {
          "text": "E. ls >>> data",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "90",
      "questionText": "\nWhich of the following commands is used to change options and positional parameters within a\nrunning Bash shell?\n\n",
      "choices": [
        {
          "text": "A. history",
          "selected": false
        },
        {
          "text": "B. setsh",
          "selected": false
        },
        {
          "text": "C. bashconf",
          "selected": false
        },
        {
          "text": "D. set",
          "selected": false
        },
        {
          "text": "E. envsetup",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "91",
      "questionText": "\nWhich of the following commands display the IDs of all processes owned by root? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. pgrep -c root",
          "selected": false
        },
        {
          "text": "B. pgrep -u root",
          "selected": false
        },
        {
          "text": "C. pgrep -f root",
          "selected": false
        },
        {
          "text": "D. pgrep -U 0",
          "selected": false
        },
        {
          "text": "E. pgrep -c 0",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "92",
      "questionText": "\nWhich of the following sequences in the vi editor saves the opened document and exits the editor?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Ctrl XX",
          "selected": false
        },
        {
          "text": "B. Ctrl :W",
          "selected": false
        },
        {
          "text": "C. Esc zz",
          "selected": false
        },
        {
          "text": "D. Esc :wq",
          "selected": false
        },
        {
          "text": "E. Esc ZZ",
          "selected": false
        }
      ],
      "answer": "DE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "93",
      "questionText": "\nWhat is the effect of the -v option for the grep command?\n\n",
      "choices": [
        {
          "text": "A. It enables color to highlight matching parts.",
          "selected": false
        },
        {
          "text": "B. It shows the command’s version information.",
          "selected": false
        },
        {
          "text": "C. It only outputs non-matching lines.",
          "selected": false
        },
        {
          "text": "D. It changes the output order showing the last matching line first.",
          "selected": false
        },
        {
          "text": "E. It outputs all lines and prefixes matching lines with a+.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "94",
      "questionText": "\nWhich of the following tools can show the complete path of an executable file that the current shell\nwould execute when starting a command without specifying its complete path? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. find",
          "selected": false
        },
        {
          "text": "B. pwd",
          "selected": false
        },
        {
          "text": "C. which",
          "selected": false
        },
        {
          "text": "D. locate",
          "selected": false
        },
        {
          "text": "E. type",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "95",
      "questionText": "\nWhich of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the\nkeyboard?\n\n",
      "choices": [
        {
          "text": "A. SIGTERM",
          "selected": false
        },
        {
          "text": "B. SIGCONT",
          "selected": false
        },
        {
          "text": "C. SIGSTOP",
          "selected": false
        },
        {
          "text": "D. SIGKILL",
          "selected": false
        },
        {
          "text": "E. SIGINT",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "96",
      "questionText": "\nWhat is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string?\n ABCabc\n\n",
      "choices": [
        {
          "text": "A. ABxxbc",
          "selected": false
        },
        {
          "text": "B. xxCxxc",
          "selected": false
        },
        {
          "text": "C. xxxxxx",
          "selected": false
        },
        {
          "text": "D. ABCabc",
          "selected": false
        },
        {
          "text": "E. Axxaxx",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "97",
      "questionText": "\nWhich of the following commands print the current working directory when using a Bash shell?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. echo \"${PWD}\"",
          "selected": false
        },
        {
          "text": "B. echo \"${WD}\"",
          "selected": false
        },
        {
          "text": "C. printwd",
          "selected": false
        },
        {
          "text": "D. pwd",
          "selected": false
        },
        {
          "text": "E. echo \"${pwd}\"",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "98",
      "questionText": "\nWhich of the following commands outputs test to the shell?\n++++++++++++++++++++++++++++++++++++++++++++++++++\n  test\n  EOT\n\n",
      "choices": [
        {
          "text": "A.  cat <!EOT",
          "selected": false
        },
        {
          "text": "B.  cat <|EOT",
          "selected": false
        },
        {
          "text": "C.  cat !<EOT",
          "selected": false
        },
        {
          "text": "D.  cat &<EOT",
          "selected": false
        },
        {
          "text": "E.  cat <<EOT",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "99",
      "questionText": "\nWhat is the default nice level when a process is started using the nice command?\n\n",
      "choices": [
        {
          "text": "A. -10",
          "selected": false
        },
        {
          "text": "B. 0",
          "selected": false
        },
        {
          "text": "C. 10",
          "selected": false
        },
        {
          "text": "D. 15",
          "selected": false
        },
        {
          "text": "E. 20",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "100",
      "questionText": "\nA user accidentally created the subdirectory \\dir in his home directory.\nWhich of the following commands will remove that directory?\n\n",
      "choices": [
        {
          "text": "A. rmdir ~/\\\\dir",
          "selected": false
        },
        {
          "text": "B. rmdir \"~/\\dir\"",
          "selected": false
        },
        {
          "text": "C. rmdir ~/’dir’",
          "selected": false
        },
        {
          "text": "D. rmdir ~/\\dir",
          "selected": false
        },
        {
          "text": "E. rmdir '~/\\dir’",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "101",
      "questionText": "\nWhich of the following commands can perform searches on file contents using regular expressions?\n\n",
      "choices": [
        {
          "text": "A. find",
          "selected": false
        },
        {
          "text": "B. locate",
          "selected": false
        },
        {
          "text": "C. grep",
          "selected": false
        },
        {
          "text": "D. reggrep",
          "selected": false
        },
        {
          "text": "E. pgrep",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "102",
      "questionText": "\nIn a nested directory structure, which find command line option would be used to restrict the\ncommand to searching down a particular number of subdirectories?\n\n",
      "choices": [
        {
          "text": "A. -maxdepth",
          "selected": false
        },
        {
          "text": "B. -dirmax",
          "selected": false
        },
        {
          "text": "C. -maxlevels",
          "selected": false
        },
        {
          "text": "D. -s",
          "selected": false
        },
        {
          "text": "E. -n",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "103",
      "questionText": "\nWhich of the following commands determines a file’s format by using a definition database file which\ncontains information about all common file types?\n\n",
      "choices": [
        {
          "text": "A. type",
          "selected": false
        },
        {
          "text": "B. file",
          "selected": false
        },
        {
          "text": "C. magic",
          "selected": false
        },
        {
          "text": "D. pmagic",
          "selected": false
        },
        {
          "text": "E. hash",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "104",
      "questionText": "\nWhich of the following commands generates a list of user names from /etc/passwd along with their\nlogin shell?\n\n",
      "choices": [
        {
          "text": "A. column -s : 1,7 /etc/passwd",
          "selected": false
        },
        {
          "text": "B. chop -c 1,7 /etc/passwd",
          "selected": false
        },
        {
          "text": "C. colrm 1,7 /etc/passwd",
          "selected": false
        },
        {
          "text": "D. sort -t: -k1,7 /etc/passwd",
          "selected": false
        },
        {
          "text": "E. cut -d: -f1,7 /etc/passwd",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "105",
      "questionText": "\nIf the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present\nin the current directory after running gunzip texts.tgz?\n\n",
      "choices": [
        {
          "text": "A. Only a.txt, b.txt, and texts.tgz",
          "selected": false
        },
        {
          "text": "B. Only texts.tar and texts.tgz",
          "selected": false
        },
        {
          "text": "C. Only a.txt.gz and b.txt.gz",
          "selected": false
        },
        {
          "text": "D. Only a.txt and b.txt",
          "selected": false
        },
        {
          "text": "E. Only texts.tar",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "106",
      "questionText": "\nIn the vi editor, how can commands such as moving the cursor or copying lines into the buffer be\nissued multiple times or applied to multiple rows?\n\n",
      "choices": [
        {
          "text": "A. By using the command :repeat followed by the number and the command",
          "selected": false
        },
        {
          "text": "B. By specifying the number right in front of a command such as 4l or 2yj.",
          "selected": false
        },
        {
          "text": "C. By selecting all affected lines using the shit and cursor keys before applying the command.",
          "selected": false
        },
        {
          "text": "D. By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.",
          "selected": false
        },
        {
          "text": "E. By specifying the number after a command such as l4 or yj2 followed by escape.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "107",
      "questionText": "\nWhich of the following statements is correct for a command ending with an & character?\n\n",
      "choices": [
        {
          "text": "A. The command’s output is redirected to /dev/null.",
          "selected": false
        },
        {
          "text": "B. The command is run in background of the current shell.",
          "selected": false
        },
        {
          "text": "C. The command’s output is executed by the shell.",
          "selected": false
        },
        {
          "text": "D. The command is run as a direct child of the init process.",
          "selected": false
        },
        {
          "text": "E. The command’s input is read from /dev/null.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "108",
      "questionText": "\nWhich of the following commands reads a file and creates separate chunks of a given size from the\nfile’s contents?\n\n",
      "choices": [
        {
          "text": "A. ar",
          "selected": false
        },
        {
          "text": "B. cat",
          "selected": false
        },
        {
          "text": "C. break",
          "selected": false
        },
        {
          "text": "D. split",
          "selected": false
        },
        {
          "text": "E. parted",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "109",
      "questionText": "\nWhat is the purpose of the xargs command?\n\n",
      "choices": [
        {
          "text": "A. It passes arguments to an X server.",
          "selected": false
        },
        {
          "text": "B. It repeats the execution of a command using different parameters for each invocation.",
          "selected": false
        },
        {
          "text": "C. It reads standard input and builds up commands to execute.",
          "selected": false
        },
        {
          "text": "D. It asks a question, graphically, and returns the answer to the shell.",
          "selected": false
        },
        {
          "text": "E. It allows specifying long options (like --help) for commands that normally only accept short options (like -h)",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "110",
      "questionText": "\nWhich command displays a list of all background tasks running in the current shell? (Specify ONLY the\ncommand without any path or parameters.)\n\n",
      "choices": [],
      "answer": "jobs",
      "questionType": "input"
    },
    {
      "questionNumber": "111",
      "questionText": "\nWhich command is used to change the priority of an already running process? (Specify ONLY the\ncommand without any path or parameters.)\n\n",
      "choices": [],
      "answer": "renice",
      "questionType": "input"
    },
    {
      "questionNumber": "112",
      "questionText": "\nIn Bash, inserting 1>&2 after a command redirects…\n\n",
      "choices": [
        {
          "text": "A. …standard error to standard input.",
          "selected": false
        },
        {
          "text": "B. …standard output to standard error.",
          "selected": false
        },
        {
          "text": "C. …standard input to standard error.",
          "selected": false
        },
        {
          "text": "D. …standard error to standard output.",
          "selected": false
        },
        {
          "text": "E. …standard output to standard input.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "113",
      "questionText": "\nWhen booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but\nhangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to\ninvestigate the problem.\nWhich of the following methods helps to identify the root cause of the problem?\n\n",
      "choices": [
        {
          "text": "A. Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.",
          "selected": false
        },
        {
          "text": "B. Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.",
          "selected": false
        },
        {
          "text": "C. Investigating the files in /var/log on the computer’s hard disk for possible errors.",
          "selected": false
        },
        {
          "text": "D. Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.",
          "selected": false
        },
        {
          "text": "E. Rebooting again from the hard drive since the system successfully booted from the rescue CD.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "114",
      "questionText": "\nWhere is the bootloader stored on the hard disk of a UEFI system?\n\n",
      "choices": [
        {
          "text": "A. In the EFI Boot Record (EBR).",
          "selected": false
        },
        {
          "text": "B. In the Master Boot Record (MBR).",
          "selected": false
        },
        {
          "text": "C. On the EFI System Partition (ESP).",
          "selected": false
        },
        {
          "text": "D. On the partition labeled boot.",
          "selected": false
        },
        {
          "text": "E. On the partition number 127.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "115",
      "questionText": "\nWhat is the correct way to set the default systemd boot target to multi-user?\n\n",
      "choices": [
        {
          "text": "A. systemctl isolate multi-user.target",
          "selected": false
        },
        {
          "text": "B. systemctl set-runlevel multi-user.target",
          "selected": false
        },
        {
          "text": "C. systemctl set-boot multi-user.target",
          "selected": false
        },
        {
          "text": "D. systemctl set-default multi-user.target",
          "selected": false
        },
        {
          "text": "E. systemctl boot -p multi-user.target",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "116",
      "questionText": "\nWhich of the following statements are correct about the initial RAM disk involved in the boot process\nof Linux? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. An initramfs is a compressed file system archive, which can be unpacked to examine its contents.",
          "selected": false
        },
        {
          "text": "B. An initramfs file contains the MBR, the bootloader and the Linux kernel.",
          "selected": false
        },
        {
          "text": "C. After a successful boot, the initramfs contents are available in /run/initramfs/.",
          "selected": false
        },
        {
          "text": "D. The kernel uses the initramfs temporarily before accessing the real root file system.",
          "selected": false
        },
        {
          "text": "E. An initramfs does not depend on a specific kernel version and is not changed after the initial installation.",
          "selected": false
        }
      ],
      "answer": "AD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "117",
      "questionText": "\nWhich of the following commands loads a kernel module along with any required dependency\nmodules?\n\n",
      "choices": [
        {
          "text": "A. depmod",
          "selected": false
        },
        {
          "text": "B. modprobe",
          "selected": false
        },
        {
          "text": "C. module_install",
          "selected": false
        },
        {
          "text": "D. insmod",
          "selected": false
        },
        {
          "text": "E. loadmod",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "118",
      "questionText": "\nWhat information can the lspci command display about the system hardware? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. System battery type",
          "selected": false
        },
        {
          "text": "B. Device IRQ settings",
          "selected": false
        },
        {
          "text": "C. PCI bus speed",
          "selected": false
        },
        {
          "text": "D. Ethernet MAC address",
          "selected": false
        },
        {
          "text": "E. Device vendor identification",
          "selected": false
        }
      ],
      "answer": "BCE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "119",
      "questionText": "\nWhich System V init configuration file is commonly used to set the default run level? (Specify the full\nname of the file, including path.)\n\n",
      "choices": [],
      "answer": "/etc/inittab",
      "questionType": "input"
    },
    {
      "questionNumber": "120",
      "questionText": "\nGiven the following two symbolic links in a System V init configuration:\n /etc/rc1.d/K01apache2\n /etc/rc2.d/S02apache2\nWhen are the scripts executed that are referenced by these links? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. S02apache2 is run when runlevel 2 is entered.",
          "selected": false
        },
        {
          "text": "B. S02apache2 is run when runlevel 2 is left.",
          "selected": false
        },
        {
          "text": "C. K01apache2 is never run because K indicates a deactivated service.",
          "selected": false
        },
        {
          "text": "D. Both S02apache2 and K01apache2 are run during a system shutdown.",
          "selected": false
        },
        {
          "text": "E. K01apache2 is run when runlevel 1 is entered.",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    }
  ],
  "102": [
    {
      "questionNumber": "1",
      "questionText": "\n\nWhich command is used to set the hostname of the local system? (Specify only the command without any\npath or parameters.)\n\n",
      "choices": [],
      "answer": "hostname",
      "questionType": "input"
    },
    {
      "questionNumber": "2",
      "questionText": "\nWhich of the following is a valid IPv6 address?\n\n",
      "choices": [
        {
          "text": "A. 2001:db8:0g21::1",
          "selected": false
        },
        {
          "text": "B. 2001::db8:4581::1",
          "selected": false
        },
        {
          "text": "C. 2001:db8:3241::1",
          "selected": false
        },
        {
          "text": "D. 2001%db8%9990%%1",
          "selected": false
        },
        {
          "text": "E. 2001.db8.819f..1",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "3",
      "questionText": "\nWhat command, depending on its options, can display the open TCP connections, the routing tables, as\nwell as network interface statistics? (Specify only the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "netstat",
      "questionType": "input"
    },
    {
      "questionNumber": "4",
      "questionText": "\nWhich command included in NetworkManager is a curses application which provides easy acces to the\nNetworkManager on the command line? (Specify only the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "nmtui",
      "questionType": "input"
    },
    {
      "questionNumber": "5",
      "questionText": "\nWhich of the following tools, used for DNS debugging, reports not only the response from the name\nsever but also details about the query?\n\n",
      "choices": [
        {
          "text": "A. dnsq",
          "selected": false
        },
        {
          "text": "B. hostname",
          "selected": false
        },
        {
          "text": "C. dig",
          "selected": false
        },
        {
          "text": "D. dnslookup",
          "selected": false
        },
        {
          "text": "E. zoneinfo",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "6",
      "questionText": "\nWhich of the following statements is valid in the file /etc/nsswitch.conf?\n\n",
      "choices": [
        {
          "text": "A. multi on",
          "selected": false
        },
        {
          "text": "B. 192.168.168.4 dns-server",
          "selected": false
        },
        {
          "text": "C. namespaces: net mount procs",
          "selected": false
        },
        {
          "text": "D. include /etc/nsswitch.d/",
          "selected": false
        },
        {
          "text": "E. hosts: files dns",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "7",
      "questionText": "\nWhich of the following connection types, as seen in nmcli connection show, may exist in\nNetworkManager? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. tcp",
          "selected": false
        },
        {
          "text": "B. ethernet",
          "selected": false
        },
        {
          "text": "C. wifi",
          "selected": false
        },
        {
          "text": "D. ipv6",
          "selected": false
        },
        {
          "text": "E. bridge",
          "selected": false
        }
      ],
      "answer": "BCE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "8",
      "questionText": "\nOn a Linux workstation, the route command takes a long time before printing out the routing table.\nWhich of the following errors does that indicate?\n\n",
      "choices": [
        {
          "text": "A. The local routing information may be corrupted and must be re-validated using a routing protocol.",
          "selected": false
        },
        {
          "text": "B. One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.",
          "selected": false
        },
        {
          "text": "C. There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.",
          "selected": false
        },
        {
          "text": "D. The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.",
          "selected": false
        },
        {
          "text": "E. DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "9",
      "questionText": "\nWhat is true about the Hop Limit field in the IPv6 header?\n\n",
      "choices": [
        {
          "text": "A. The field is not changed during the transport of a package.",
          "selected": false
        },
        {
          "text": "B. The field is transmitted within a hop-by-hop extension header.",
          "selected": false
        },
        {
          "text": "C. Each router forwarding the packet increases the field's value.",
          "selected": false
        },
        {
          "text": "D. Each router forwarding the packet decreases the field's value.",
          "selected": false
        },
        {
          "text": "E. For multicast packages, the field's value is always 1.",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "10",
      "questionText": "\nWhich of the following nmcli subcommands exist? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. nmcli ethernet",
          "selected": false
        },
        {
          "text": "B. nmcli device",
          "selected": false
        },
        {
          "text": "C. nmcli wifi",
          "selected": false
        },
        {
          "text": "D. nmcli address",
          "selected": false
        },
        {
          "text": "E. nmcli connection",
          "selected": false
        }
      ],
      "answer": "BE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "11",
      "questionText": "\nWhich of the following changes may occur as a consequence of using the command ip? (Choose\nthree.)\n\n",
      "choices": [
        {
          "text": "A. Network interfaces may become active or inactive.",
          "selected": false
        },
        {
          "text": "B. New name servers may be added to the resolver configuration.",
          "selected": false
        },
        {
          "text": "C. The system's host name may change.",
          "selected": false
        },
        {
          "text": "D. IP addresses may change.",
          "selected": false
        },
        {
          "text": "E. The routing table may change.",
          "selected": false
        }
      ],
      "answer": "ADE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "12",
      "questionText": "\nHow many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?\n\n",
      "choices": [
        {
          "text": "A. 33",
          "selected": false
        },
        {
          "text": "B. 14",
          "selected": false
        },
        {
          "text": "C. 30",
          "selected": false
        },
        {
          "text": "D. 62",
          "selected": false
        },
        {
          "text": "E. 126",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "13",
      "questionText": "\nWhich of the following IPv4 networks are reserved by IANA for private address assignment and private\nrouting? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. 10.0.0.0/8",
          "selected": false
        },
        {
          "text": "B. 127.0.0.0/8",
          "selected": false
        },
        {
          "text": "C. 169.255.0.0/16",
          "selected": false
        },
        {
          "text": "D. 172.16.0.0/12",
          "selected": false
        },
        {
          "text": "E. 192.168.0.0/16",
          "selected": false
        }
      ],
      "answer": "ADE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "14",
      "questionText": "\nWhich of the following commands configure network interfaces based on the system's existing\ndistribution-specific configuration files? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. ifconf",
          "selected": false
        },
        {
          "text": "B. ifdown",
          "selected": false
        },
        {
          "text": "C. ifpause",
          "selected": false
        },
        {
          "text": "D. ifstart",
          "selected": false
        },
        {
          "text": "E. ifup",
          "selected": false
        }
      ],
      "answer": "BE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "15",
      "questionText": "\nWhich of the following statements is true if the UID of a regular user is identical to the GID of a group?\n\n",
      "choices": [
        {
          "text": "A. UID have precedence over GIDs, therefore the user is available while the group doesn't.",
          "selected": false
        },
        {
          "text": "B. The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
          "selected": false
        },
        {
          "text": "C. UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
          "selected": false
        },
        {
          "text": "D. The user is the only member of the group, even if the group configuration contains other members.",
          "selected": false
        },
        {
          "text": "E. GIDs have precedence over UIDs, therefore the group is available while the user isn't.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "16",
      "questionText": "\nWhich of the following information is stored in /etc/shadow for each user?\n\n",
      "choices": [
        {
          "text": "A. The timestamp of the user's last login",
          "selected": false
        },
        {
          "text": "B. The user's private SSH keys",
          "selected": false
        },
        {
          "text": "C. The hashed password of the user",
          "selected": false
        },
        {
          "text": "D. The numerical user ID (UID)",
          "selected": false
        },
        {
          "text": "E. The path to the user's home directory",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "17",
      "questionText": "\nWhich of the following commands shows all active systemd timers?\n\n",
      "choices": [
        {
          "text": "A. systemctl-timer show",
          "selected": false
        },
        {
          "text": "B. timectl list",
          "selected": false
        },
        {
          "text": "C. systemctl -t",
          "selected": false
        },
        {
          "text": "D. systemctl list-timers",
          "selected": false
        },
        {
          "text": "E. timeq",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "18",
      "questionText": "\nWhich of the following tasks can the date command accomplish? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Set the system's date and time.",
          "selected": false
        },
        {
          "text": "B. Set the system's date but not the time.",
          "selected": false
        },
        {
          "text": "C. Calculate the time span between two dates.",
          "selected": false
        },
        {
          "text": "D. Print a calendar for a month or a year.",
          "selected": false
        },
        {
          "text": "E. Display time in a specific format.",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "19",
      "questionText": "\nWhich file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify\nthe full name of the file, including path.)\n\n",
      "choices": [],
      "answer": "/etc/cron.allow",
      "questionType": "input"
    },
    {
      "questionNumber": "20",
      "questionText": "\nWhat can be specified with useradd? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Commands the user can run using sudo.",
          "selected": false
        },
        {
          "text": "B. The absolute path to the user's home directory.",
          "selected": false
        },
        {
          "text": "C. Which printers are available for the new user.",
          "selected": false
        },
        {
          "text": "D. The SSH keys used to login to the new account.",
          "selected": false
        },
        {
          "text": "E. The numeric user ID (UID) of the user.",
          "selected": false
        }
      ],
      "answer": "BE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "21",
      "questionText": "\nWhat is true about the file /etc/localtime?\n\n",
      "choices": [
        {
          "text": "A. It is a plain text file containing a string such as Europe/Berlin",
          "selected": false
        },
        {
          "text": "B. It is created and maintained by the NTP service based on the location of the system's IP address.",
          "selected": false
        },
        {
          "text": "C. It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
          "selected": false
        },
        {
          "text": "D. After changing this file, newtzconfighas to be run to make the changes effective.",
          "selected": false
        },
        {
          "text": "E. It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "22",
      "questionText": "\nWhich of the following statements is true regarding systemd timer units?\n\n",
      "choices": [
        {
          "text": "A. Timer units can only be defined within a service unit's file.",
          "selected": false
        },
        {
          "text": "B. The command executed by the timer is specified in the timer unit's [Cmd] section.",
          "selected": false
        },
        {
          "text": "C. A dedicated system service, systemd-cron, handles the execution of timer units.",
          "selected": false
        },
        {
          "text": "D. Timer units only exist in the system scope and are not available for users.",
          "selected": false
        },
        {
          "text": "E. Each systemd timer unit controls a specific systemd service unit.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "23",
      "questionText": "\nWhich of the following fields are available in the standard format of both the global /etc/crontab file as\nwell as in user-specific crontab files? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Year",
          "selected": false
        },
        {
          "text": "B. Minute",
          "selected": false
        },
        {
          "text": "C. Username",
          "selected": false
        },
        {
          "text": "D. Effective group ID",
          "selected": false
        },
        {
          "text": "E. Command",
          "selected": false
        }
      ],
      "answer": "BE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "24",
      "questionText": "\nWhich of the following commands should be executed when starting a login shell in order to change\nthe language of messages for an internationalized program to Portuguese (pt)?\n\n",
      "choices": [
        {
          "text": "A. export LANGUAGE=“pt\"",
          "selected": false
        },
        {
          "text": "B. export LC_MESSAGES=“pt\"",
          "selected": false
        },
        {
          "text": "C. export UI_MESSAGES=“pt\"",
          "selected": false
        },
        {
          "text": "D. export MESSAGE=“pt\"",
          "selected": false
        },
        {
          "text": "E. export ALL_MESSAGES=“pt\"",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "25",
      "questionText": "\nWhich of the following files assigns a user to its primary group?\n\n",
      "choices": [
        {
          "text": "A. /etc/pgroup",
          "selected": false
        },
        {
          "text": "B. /etc/shadow",
          "selected": false
        },
        {
          "text": "C. /etc/passwd",
          "selected": false
        },
        {
          "text": "D. /etc/group",
          "selected": false
        },
        {
          "text": "E. /etc/gshadow",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "26",
      "questionText": "\nWhich of the following steps prevents a user from obtaining an interactive login session?\n\n",
      "choices": [
        {
          "text": "A. Setting the UID for the user to 0.",
          "selected": false
        },
        {
          "text": "B. Running the command chsh -s /bin/false with the user name.",
          "selected": false
        },
        {
          "text": "C. Removing the user from the group staff.",
          "selected": false
        },
        {
          "text": "D. Adding the user to /etc/noaccess.",
          "selected": false
        },
        {
          "text": "E. Creating a .nologin file in the user's home directory.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "27",
      "questionText": "\nWhich command included in systemd supports selecting messages from the systemd journal by criteria\nsuch as time or unit name? (Specify only the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "journalctl",
      "questionType": "input"
    },
    {
      "questionNumber": "28",
      "questionText": "\nWhich of the following statements about systemd-journald are true? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. It is incompatible with syslog and cannot be installed on a system using regular syslog.",
          "selected": false
        },
        {
          "text": "B. It only processes messages of systemd and not messages of any other tools.",
          "selected": false
        },
        {
          "text": "C. It can pass log messages to syslog for further processing.",
          "selected": false
        },
        {
          "text": "D. It maintains metadata such as _UID or _PID for each message.",
          "selected": false
        },
        {
          "text": "E. It supports syslog facilities such as kern, user, and auth.",
          "selected": false
        }
      ],
      "answer": "CDE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "29",
      "questionText": "\nWhich command must be run after adding a new email alias to the configuration in order to make this\nchange effective? (Specify the command without any path but including all required parameters.)\n\n",
      "choices": [],
      "answer": "newaliases",
      "questionType": "input"
    },
    {
      "questionNumber": "30",
      "questionText": "\nWhich option in the chrony configuration file changes the initial interval of polls to a NTP server in order\nto speed up the initial synchronization?\n\n",
      "choices": [
        {
          "text": "A. iburst",
          "selected": false
        },
        {
          "text": "B. quickstart",
          "selected": false
        },
        {
          "text": "C. fast",
          "selected": false
        },
        {
          "text": "D. fsync",
          "selected": false
        },
        {
          "text": "E. flood",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "31",
      "questionText": "\nWhich of the following commands is used to rotate, compress, and mail system logs?\n\n",
      "choices": [
        {
          "text": "A. logrotate",
          "selected": false
        },
        {
          "text": "B. striplog",
          "selected": false
        },
        {
          "text": "C. syslogd --rotate",
          "selected": false
        },
        {
          "text": "D. rotatelog",
          "selected": false
        },
        {
          "text": "E. logger",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "32",
      "questionText": "\nWhy is the correct configuration of a system's time zone important?\n\n",
      "choices": [
        {
          "text": "A. Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.",
          "selected": false
        },
        {
          "text": "B. Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.",
          "selected": false
        },
        {
          "text": "C. Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.",
          "selected": false
        },
        {
          "text": "D. Because NTP chooses servers nearby based on the configured time zone.",
          "selected": false
        },
        {
          "text": "E. Because the conversion of Unix timestamps to local time relies on the time zone configuration.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "33",
      "questionText": "\nWhich command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA's\nmail queue? (Specify only the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "mailq",
      "questionType": "input"
    },
    {
      "questionNumber": "34",
      "questionText": "\nWhat is the top-level directory which contains the configuration files for CUPS? (Specify the full path to\nthe directory.)\n\n",
      "choices": [],
      "answer": "/etc/cups",
      "questionType": "input"
    },
    {
      "questionNumber": "35",
      "questionText": "\nWhich of the following commands lists all queued print jobs?\n\n",
      "choices": [
        {
          "text": "A. lpd",
          "selected": false
        },
        {
          "text": "B. lpr",
          "selected": false
        },
        {
          "text": "C. lp",
          "selected": false
        },
        {
          "text": "D. lsq",
          "selected": false
        },
        {
          "text": "E. lpq",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "36",
      "questionText": "\nWhich of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog\nand sends all critical events to the remote server logger.example.com?\n\n",
      "choices": [
        {
          "text": "A. mail.* /var/log/maillog \\n mail,crit @logger.example.org",
          "selected": false
        },
        {
          "text": "B. mail.* /var/log/maillog \\n mail.crit syslog://logger.example.org",
          "selected": false
        },
        {
          "text": "C. mail /var/log/maillog \\n mail.crit @logger.example.org",
          "selected": false
        },
        {
          "text": "D. mail.* /var/log/maillog \\n mail.crit @logger.example.org",
          "selected": false
        },
        {
          "text": "E. mail * /var/log/maillog \\n mail crit @logger.example.org",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "37",
      "questionText": "\nWhich option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information?\n(Specify only the option without any values or parameters.)\n\n",
      "choices": [],
      "answer": "server",
      "questionType": "input"
    },
    {
      "questionNumber": "38",
      "questionText": "\nWhich of the following protocols is related to the term open relay?\n\n",
      "choices": [
        {
          "text": "A. SMTP",
          "selected": false
        },
        {
          "text": "B. POP3",
          "selected": false
        },
        {
          "text": "C. NTP",
          "selected": false
        },
        {
          "text": "D. IMAP",
          "selected": false
        },
        {
          "text": "E. LDAP",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "39",
      "questionText": "\nWhich of the following commands displays all environment and shell variables?\n\n",
      "choices": [
        {
          "text": "A. getargs",
          "selected": false
        },
        {
          "text": "B. lsenv",
          "selected": false
        },
        {
          "text": "C. ls",
          "selected": false
        },
        {
          "text": "D. env",
          "selected": false
        },
        {
          "text": "E. lsshell",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "40",
      "questionText": "\nWhich of the following comparison operators for test work on elements in the file system? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. -z",
          "selected": false
        },
        {
          "text": "B. -eq",
          "selected": false
        },
        {
          "text": "C. -d",
          "selected": false
        },
        {
          "text": "D. -f",
          "selected": false
        },
        {
          "text": "E. -lt",
          "selected": false
        }
      ],
      "answer": "CD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "41",
      "questionText": "\nWhat information is provided by the echo $$ command?\n\n",
      "choices": [
        {
          "text": "A. The process ID of the current shell.",
          "selected": false
        },
        {
          "text": "B. The process ID for the following command.",
          "selected": false
        },
        {
          "text": "C. The process ID of the last command executed.",
          "selected": false
        },
        {
          "text": "D. The process ID of the last command which has been placed in the background.",
          "selected": false
        },
        {
          "text": "E. The process ID of the echo command.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "42",
      "questionText": "\nWhich command makes the shell variable named VARIABLE visible to subshells?\n\n",
      "choices": [
        {
          "text": "A. export $VARIABLE",
          "selected": false
        },
        {
          "text": "B. env VARIABLE",
          "selected": false
        },
        {
          "text": "C. set $VARIABLE",
          "selected": false
        },
        {
          "text": "D. set VARIABLE",
          "selected": false
        },
        {
          "text": "E. export VARIABLE",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "43",
      "questionText": "\nWhat output is produced by the following command sequence?\n  echo '1 2 3 4 5 6' | while read a b c; do\n    echo result: $c $b $a; done\n\n",
      "choices": [
        {
          "text": "A. result: 6 5 4",
          "selected": false
        },
        {
          "text": "B. result: 1 2 3 4 5 6",
          "selected": false
        },
        {
          "text": "C. result: 3 4 5 6 2 1",
          "selected": false
        },
        {
          "text": "D. result: 6 5 4 3 2 1",
          "selected": false
        },
        {
          "text": "E. result: 3 2 1",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "44",
      "questionText": "\nWhich of the following configuration files should be modified to globally set shell variables for all\nusers?\n\n",
      "choices": [
        {
          "text": "A. /etc/profile",
          "selected": false
        },
        {
          "text": "B. /etc/bashrc",
          "selected": false
        },
        {
          "text": "C. ~/.bash_profile",
          "selected": false
        },
        {
          "text": "D. /etc/.bashrc",
          "selected": false
        },
        {
          "text": "E. /etc/shellenv",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "45",
      "questionText": "\nWhat output does the command seq 10 produce?\n\n",
      "choices": [
        {
          "text": "A. A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
          "selected": false
        },
        {
          "text": "B. It creates no output because a second parameter is missing.",
          "selected": false
        },
        {
          "text": "C. The number 0 through 9 with one number per line.",
          "selected": false
        },
        {
          "text": "D. The number 10 to standard output.",
          "selected": false
        },
        {
          "text": "E. The numbers 1 through 10 with one number per line.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "46",
      "questionText": "\nWhat command list the aliases defined in the current Bash shell? (Specify only the command without any\npath or parameters.)\n\n",
      "choices": [],
      "answer": "alias",
      "questionType": "input"
    },
    {
      "questionNumber": "47",
      "questionText": "\nWhich of the following commands can be used to limit the amount of memory a user may use?\n\n",
      "choices": [
        {
          "text": "A. umask",
          "selected": false
        },
        {
          "text": "B. usermod",
          "selected": false
        },
        {
          "text": "C. passwd",
          "selected": false
        },
        {
          "text": "D. ulimit",
          "selected": false
        },
        {
          "text": "E. chage",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "48",
      "questionText": "\nWhat is a purpose of an SSH host key?\n\n",
      "choices": [
        {
          "text": "A. It must be sent by any SSH client in addition to a user key in order to identify the client's host.",
          "selected": false
        },
        {
          "text": "B. It is root key by which all user SSH keys must be signed.",
          "selected": false
        },
        {
          "text": "C. It provides the server's identity information to connecting SSH clients.",
          "selected": false
        },
        {
          "text": "D. It authenticates any user that logs into a remote machine from the key's host.",
          "selected": false
        },
        {
          "text": "E. It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "49",
      "questionText": "\nWhat is the purpose of TCP wrapper?\n\n",
      "choices": [
        {
          "text": "A. Manage and adjust bandwidth used by TCP services.",
          "selected": false
        },
        {
          "text": "B. Bind a network service to a TCP port.",
          "selected": false
        },
        {
          "text": "C. Encapsulate TCP messages in IP packets.",
          "selected": false
        },
        {
          "text": "D. Add SSL support to plain text TCP services.",
          "selected": false
        },
        {
          "text": "E. Limit access to a network service.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "50",
      "questionText": "\nGiven the following excerpt of the sudo configuration:\n  Jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk\nWhich of the following statements are true? (Choose three.)\n\n",
      "choices": [
        {
          "text": "A. Jane can run /bin/id only after specifying her password.",
          "selected": false
        },
        {
          "text": "B. Jane can run /sbin/fdisk after specifying root's password.",
          "selected": false
        },
        {
          "text": "C. Jane can run /sbin/fdisk after specifying her password.",
          "selected": false
        },
        {
          "text": "D. Jane can run /bin/kill without specifying a password.",
          "selected": false
        },
        {
          "text": "E. Jane can run /bin/id without specifying her password.",
          "selected": false
        }
      ],
      "answer": "CDE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "51",
      "questionText": "\nWhich configuration file contains the default options for SSH clients?\n\n",
      "choices": [
        {
          "text": "A. /etc/ssh/sshd_config",
          "selected": false
        },
        {
          "text": "B. /etc/ssh/ssh",
          "selected": false
        },
        {
          "text": "C. /etc/ssh/ssh_config",
          "selected": false
        },
        {
          "text": "D. /etc/ssh/client",
          "selected": false
        },
        {
          "text": "E. /etc/ssh/ssh_client",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "52",
      "questionText": "\nDepending on a system's configuration, which of the following files can be used to enable and disable\nnetwork services running on this host?\n\n",
      "choices": [
        {
          "text": "A. /etc/profile",
          "selected": false
        },
        {
          "text": "B. /etc/xinetd.conf",
          "selected": false
        },
        {
          "text": "C. /etc/ports",
          "selected": false
        },
        {
          "text": "D. /etc/services",
          "selected": false
        },
        {
          "text": "E. /etc/host.conf",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "53",
      "questionText": "\nWhich of the following commands can identify the PID or a process which opened a TCP port?\n\n",
      "choices": [
        {
          "text": "A. ptrace",
          "selected": false
        },
        {
          "text": "B. strace",
          "selected": false
        },
        {
          "text": "C. debug",
          "selected": false
        },
        {
          "text": "D. lsof",
          "selected": false
        },
        {
          "text": "E. nessus",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "54",
      "questionText": "\nWhen using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in\norder to help applications to connect to the correct X11 server? (Specify only the environment variable\nwithout any additional commands or values.)\n\n",
      "choices": [],
      "answer": "DISPLAY",
      "questionType": "input"
    },
    {
      "questionNumber": "55",
      "questionText": "\nThe presence of what file will temporarily prevent all users except root from logging into a system?\n(Specify the full name of the file, including path.)\n\n",
      "choices": [],
      "answer": "/etc/nologin",
      "questionType": "input"
    },
    {
      "questionNumber": "56",
      "questionText": "\nWhich of the following commands preloads and manages existing SSH keys that are used for\nautomatic authentication while logging in to other machines using SSH?\n\n",
      "choices": [
        {
          "text": "A. sshd",
          "selected": false
        },
        {
          "text": "B. ssh-keyring",
          "selected": false
        },
        {
          "text": "C. ssh-keygen",
          "selected": false
        },
        {
          "text": "D. ssh-pki",
          "selected": false
        },
        {
          "text": "E. ssh-agent",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "57",
      "questionText": "\nOn a machine running several X servers, how do programs identify the different instances of the X11\nserver?\n\n",
      "choices": [
        {
          "text": "A. By a fixed UUID that is defined in the X11 configuration file.",
          "selected": false
        },
        {
          "text": "B. By a display name like :1 .",
          "selected": false
        },
        {
          "text": "C. By the name of the user that runs the X server like x11: bob.",
          "selected": false
        },
        {
          "text": "D. By a device name like /dev/X11/xservers/1.",
          "selected": false
        },
        {
          "text": "E. By a unique IPv6 address from the fe80::/64subnet.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "58",
      "questionText": "\nWhat is the purpose of a screen reader?\n\n",
      "choices": [
        {
          "text": "A. It manages virtual keyboards on touch screen displays.",
          "selected": false
        },
        {
          "text": "B. It reads the parameters of the attached monitors and creates an appropriate X11 configuration.",
          "selected": false
        },
        {
          "text": "C. It displays lines and markers to help people use speed reading techniques.",
          "selected": false
        },
        {
          "text": "D. It manages and displays files that contain e-books.",
          "selected": false
        },
        {
          "text": "E. It reads displayed text to accommodate the needs of blind or visually impaired people.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "59",
      "questionText": "\nThe X11 configuration file xorg.conf is grouped into sections.\nHow is the content of the section SectionName represented?\n\n",
      "choices": [
        {
          "text": "A. It is placed in curly brackets as in Section SectionName {…}.",
          "selected": false
        },
        {
          "text": "B. It is placed between the tags <Section name=“SectionName\"> and </Section>.",
          "selected": false
        },
        {
          "text": "C. It is placed between a line containing Section “SectionName\" and a line containing EndSection.",
          "selected": false
        },
        {
          "text": "D. It is placed after the row [SectionName].",
          "selected": false
        },
        {
          "text": "E. It is placed after an initial unindented Section “SectionName\" and must be indented by exactly one tab character.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "60",
      "questionText": "\nWhich of the following features are provided by SPICE? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Connecting local USB devices to remote applications.",
          "selected": false
        },
        {
          "text": "B. Accessing graphical applications on a remote host.",
          "selected": false
        },
        {
          "text": "C. Replacing Xorg as local X11 server.",
          "selected": false
        },
        {
          "text": "D. Downloading and locally installing applications from a remote machine.",
          "selected": false
        },
        {
          "text": "E. Uploading and running a binary program on a remote machine.",
          "selected": false
        }
      ],
      "answer": "AB",
      "questionType": "multiple"
    },
    {
      "questionNumber": "61",
      "questionText": "\nWhere is the systemd journal stored?\n\n",
      "choices": [
        {
          "text": "A. /var/jlog/and /var/jlogd/",
          "selected": false
        },
        {
          "text": "B. /proc/log/and /proc/klog/",
          "selected": false
        },
        {
          "text": "C. /run/log/journal/ or /var/log/journal/",
          "selected": false
        },
        {
          "text": "D. /var/log/syslog.binor /var/log/syslog.jrn",
          "selected": false
        },
        {
          "text": "E. /etc/systemd/journal/or /usr/lib/systemd/journal/",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "62",
      "questionText": "\nWhich of the following is true regarding the command sendmail?\n\n",
      "choices": [
        {
          "text": "A. With any MTA, the sendmail command must be run periodically by the cron daemon.",
          "selected": false
        },
        {
          "text": "B. When using systemd, sendmail is an alias to relayctl.",
          "selected": false
        },
        {
          "text": "C. The sendmail command prints the MTA's queue history of which mails have been sent successfully.",
          "selected": false
        },
        {
          "text": "D. It is only available when the sendmail MTA is installed.",
          "selected": false
        },
        {
          "text": "E. All common MTAs, including Postfix and Exim, provide a sendmail command.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "63",
      "questionText": "\nWhich file inside the CUPS configuration directory contains the settings of the printers?\n\n",
      "choices": [
        {
          "text": "A. cups-devices.conf",
          "selected": false
        },
        {
          "text": "B. snmp.conf",
          "selected": false
        },
        {
          "text": "C. printers.conf",
          "selected": false
        },
        {
          "text": "D. printcap.conf",
          "selected": false
        },
        {
          "text": "E. cupsd.conf",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "64",
      "questionText": "\nWhich file is processed by newaliases? (Specify the full name of the file, including path.)\n\n",
      "choices": [],
      "answer": "/etc/aliases",
      "questionType": "input"
    },
    {
      "questionNumber": "65",
      "questionText": "\nWhich of the following are syslog facilities? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. local5",
          "selected": false
        },
        {
          "text": "B. accounting",
          "selected": false
        },
        {
          "text": "C. mail",
          "selected": false
        },
        {
          "text": "D. postmaster",
          "selected": false
        },
        {
          "text": "E. remote",
          "selected": false
        }
      ],
      "answer": "AC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "66",
      "questionText": "\nWhich of the following parameters are used for journalctl to limit the time frame of the output? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. --since=",
          "selected": false
        },
        {
          "text": "B. --from=",
          "selected": false
        },
        {
          "text": "C. --until=",
          "selected": false
        },
        {
          "text": "D. --upto=",
          "selected": false
        },
        {
          "text": "E. --date=",
          "selected": false
        }
      ],
      "answer": "AC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "67",
      "questionText": "\nWhat is true regarding the file ~/.forward?\n\n",
      "choices": [
        {
          "text": "A. When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.",
          "selected": false
        },
        {
          "text": "B. After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.",
          "selected": false
        },
        {
          "text": "C. Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.",
          "selected": false
        },
        {
          "text": "D. As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.",
          "selected": false
        },
        {
          "text": "E. By default, only ~/.forward files of users in the group mailq are processed while all other user's ~/.forward files are ignored.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "68",
      "questionText": "\nWhich of the following commands display a list of jobs in the print queue? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. cups --list",
          "selected": false
        },
        {
          "text": "B. lprm -l",
          "selected": false
        },
        {
          "text": "C. lpstat",
          "selected": false
        },
        {
          "text": "D. lpr -q",
          "selected": false
        },
        {
          "text": "E. lpq",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "69",
      "questionText": "\nOn a system using systemd-journald, which of the following commands add the message Howdy to\nthe system log? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. append Howdy",
          "selected": false
        },
        {
          "text": "B. logger Howdy",
          "selected": false
        },
        {
          "text": "C. systemd-cat echo Howdy",
          "selected": false
        },
        {
          "text": "D. echo Howdy > /dev/journal",
          "selected": false
        },
        {
          "text": "E. journalctl add Howdy",
          "selected": false
        }
      ],
      "answer": "BC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "70",
      "questionText": "\nWhich of the following options in the chrony configuration file define remote time sources? (Choose\ntwo.)\n\n",
      "choices": [
        {
          "text": "A. source",
          "selected": false
        },
        {
          "text": "B. clock",
          "selected": false
        },
        {
          "text": "C. remote",
          "selected": false
        },
        {
          "text": "D. pool",
          "selected": false
        },
        {
          "text": "E. server",
          "selected": false
        }
      ],
      "answer": "DE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "71",
      "questionText": "\nWhich command is used to sync the hardware clock to the system clock? (Specify only the command\nwithout any path or parameters.)\n\n",
      "choices": [],
      "answer": "hwclock",
      "questionType": "input"
    },
    {
      "questionNumber": "72",
      "questionText": "\nWhich of the following situations is observed and corrected by an NTP client?\n\n",
      "choices": [
        {
          "text": "A. The skew in time between the system clock and the computer's hardware clock.",
          "selected": false
        },
        {
          "text": "B. The physical location and the time zone configuration.",
          "selected": false
        },
        {
          "text": "C. Changes in the time zone of the current computer's location.",
          "selected": false
        },
        {
          "text": "D. Adjustment needed to support Daylight Saving Time.",
          "selected": false
        },
        {
          "text": "E. The skew in time between the system clock and the reference clock.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "73",
      "questionText": "\nIf an alias ls exists, which of the following commands updates the alias to point to the command ls -l\ninstead of the alias's current target?\n\n",
      "choices": [
        {
          "text": "A. set ls='ls -l'",
          "selected": false
        },
        {
          "text": "B. alias ls='ls -l'",
          "selected": false
        },
        {
          "text": "C. alias --force ls='ls -l'",
          "selected": false
        },
        {
          "text": "D. alias --update ls ls='ls -l'",
          "selected": false
        },
        {
          "text": "E. realias ls='ls -l'",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "74",
      "questionText": "\nWhich of the following commands puts the output of the command date into the shell variable mydate?\n\n",
      "choices": [
        {
          "text": "A. mydate=\"date\"",
          "selected": false
        },
        {
          "text": "B. mydate=\"exec date\"",
          "selected": false
        },
        {
          "text": "C. mydate=\"$((date))\"",
          "selected": false
        },
        {
          "text": "D. mydate=\"$(date)\"",
          "selected": false
        },
        {
          "text": "E. mydate=\"${date}\"",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "75",
      "questionText": "\nWhat information is shown by the echo $? command?\n\n",
      "choices": [
        {
          "text": "A. The process ID of the echo command.",
          "selected": false
        },
        {
          "text": "B. The exit value of the command executed immediately before echo.",
          "selected": false
        },
        {
          "text": "C. The process ID which will be used for the next command.",
          "selected": false
        },
        {
          "text": "D. The exit value of the echo command.",
          "selected": false
        },
        {
          "text": "E. The process ID of the current shell.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "76",
      "questionText": "\nWhich of the following files is not read directly by a Bash login shell?\n\n",
      "choices": [
        {
          "text": "A. ~/.bashrc",
          "selected": false
        },
        {
          "text": "B. ~/.bash_profile",
          "selected": false
        },
        {
          "text": "C. ~/.bash_login",
          "selected": false
        },
        {
          "text": "D. ~/.profile",
          "selected": false
        },
        {
          "text": "E. /etc/profile",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "77",
      "questionText": "\nWhat is true about the file .profile in a user's home directory?\n\n",
      "choices": [
        {
          "text": "A. It must be executable.",
          "selected": false
        },
        {
          "text": "B. It must call the binary of the login shell.",
          "selected": false
        },
        {
          "text": "C. It must use a valid shell script syntax.",
          "selected": false
        },
        {
          "text": "D. It must start with a shebang.",
          "selected": false
        },
        {
          "text": "E. It must be readable for its owner only.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "78",
      "questionText": "\nWhat is true regarding the statement beginning with \n  #! \nthat is found in the first line of script? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. It prevents the scripts from being executed until the ! is removed.",
          "selected": false
        },
        {
          "text": "B. It triggers the installation of the script's interpreter.",
          "selected": false
        },
        {
          "text": "C. It specifies the path and the arguments of the interpreter used to run the script.",
          "selected": false
        },
        {
          "text": "D. It defines the character encoding of the script.",
          "selected": false
        },
        {
          "text": "E. It is a comment that is ignored by the script interpreter.",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "79",
      "questionText": "\nWhat output does the command seq 1 5 20 produce?\n\n",
      "choices": [
        {
          "text": "A. 1 5 10 15",
          "selected": false
        },
        {
          "text": "B. 1 6 11 16",
          "selected": false
        },
        {
          "text": "C. 1 2 3 4",
          "selected": false
        },
        {
          "text": "D. 2 3 4 5",
          "selected": false
        },
        {
          "text": "E. 5 10 15 20",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "80",
      "questionText": "\nWhich of the following commands lists all defines variables and functions within Bash?\n\n",
      "choices": [
        {
          "text": "A. env",
          "selected": false
        },
        {
          "text": "B. export",
          "selected": false
        },
        {
          "text": "C. env -a",
          "selected": false
        },
        {
          "text": "D. set",
          "selected": false
        },
        {
          "text": "E. echo $ENV",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "81",
      "questionText": "\nWhat information related to a user account is modified using the chage command?\n\n",
      "choices": [
        {
          "text": "A. Default ownership for new files",
          "selected": false
        },
        {
          "text": "B. Group membership",
          "selected": false
        },
        {
          "text": "C. Set of commands available to the user",
          "selected": false
        },
        {
          "text": "D. Password expiry information",
          "selected": false
        },
        {
          "text": "E. Default permissions for new files",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "82",
      "questionText": "\nWhich command is used to set restrictions on the size of a core file that is created for a user when a\nprogram crashes?\n\n",
      "choices": [
        {
          "text": "A. core",
          "selected": false
        },
        {
          "text": "B. edquota",
          "selected": false
        },
        {
          "text": "C. quota",
          "selected": false
        },
        {
          "text": "D. ulimit",
          "selected": false
        },
        {
          "text": "E. ktrace",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "83",
      "questionText": "\nHow do shadow passwords improve the password security in comparison to standard no-shadow\npassword?\n\n",
      "choices": [
        {
          "text": "A. Regular users do not have access to the password hashes of shadow passwords.",
          "selected": false
        },
        {
          "text": "B. Every shadow password is valid for 45 days and must be changed afterwards.",
          "selected": false
        },
        {
          "text": "C. The system's host key is used to encrypt all shadow passwords.",
          "selected": false
        },
        {
          "text": "D. Shadow passwords are always combined with a public key that has to match the user's private key.",
          "selected": false
        },
        {
          "text": "E. Shadow passwords are stored in plain text and can be checked for weak passwords.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "84",
      "questionText": "\nAfter editing the TCP wrapper configuration to grant specific hosts access to a service, when do these\nchanges become effective?\n\n",
      "choices": [
        {
          "text": "A. The new configuration becomes effective after restarting the respective service.",
          "selected": false
        },
        {
          "text": "B. The new configuration becomes effective at the next system reboot.",
          "selected": false
        },
        {
          "text": "C. The new configuration becomes effective when the last established connection to the service is closed.",
          "selected": false
        },
        {
          "text": "D. The new configuration becomes effective after restarting the tcpd service.",
          "selected": false
        },
        {
          "text": "E. The new configuration becomes effective immediately for all new connections.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "85",
      "questionText": "\nWhat is true regarding public and private SSH keys? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. For each user account, there is exactly one key pair that can be used to log into that account.",
          "selected": false
        },
        {
          "text": "B. The private key must never be revealed to anyone.",
          "selected": false
        },
        {
          "text": "C. Several different public keys may be generated for the same private key.",
          "selected": false
        },
        {
          "text": "D. To maintain the private key's confidentiality, the SSH key pair must be created by its owner.",
          "selected": false
        },
        {
          "text": "E. To allow remote logins, the user's private key must be copied to the remote server.",
          "selected": false
        }
      ],
      "answer": "BD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "86",
      "questionText": "\nWhich of the following commands finds all files owned by root that have the SetUID bit set?\n\n",
      "choices": [
        {
          "text": "A. find / -user root -perm -4000",
          "selected": false
        },
        {
          "text": "B. find / -user 0 -mode +s",
          "selected": false
        },
        {
          "text": "C. find / -owner root -setuid",
          "selected": false
        },
        {
          "text": "D. find / -owner 0 -permbits 0x100000000",
          "selected": false
        },
        {
          "text": "E. find / --filter uid=1 --filter pers=u+s",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "87",
      "questionText": "\nWhat command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the\ncommand name only without any path.)\n\n",
      "choices": [],
      "answer": "ssh-add",
      "questionType": "input"
    },
    {
      "questionNumber": "88",
      "questionText": "\nWhich directory holds configuration files for xinetd services? (Specify the full path to the directory.)\n\n",
      "choices": [],
      "answer": "/etc/xinetd.d/",
      "questionType": "input"
    },
    {
      "questionNumber": "89",
      "questionText": "\nWhich mechanism does ssh use to interact with the SSH agent?\n\n",
      "choices": [
        {
          "text": "A. Connecting to port 2222 which is used by the system-wide SSH agent.",
          "selected": false
        },
        {
          "text": "B. Using the fixed socket .ssh-agent/ipc.",
          "selected": false
        },
        {
          "text": "C. Creating an alias replacing ssh with calls to ssh-agent.",
          "selected": false
        },
        {
          "text": "D. Starting ssh-agent as a child process for each ssh invocation.",
          "selected": false
        },
        {
          "text": "E. Evaluating environment variables such as SSH_AUTH_SOCK.",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "90",
      "questionText": "\nWhich parameter of the ssh command specifies the location of the private key used for login attempts?\n(Specify only the option name without any values or parameters.)\n\n",
      "choices": [],
      "answer": "-i",
      "questionType": "input"
    },
    {
      "questionNumber": "91",
      "questionText": "\nWhich of the following is true about IPv6?\n\n",
      "choices": [
        {
          "text": "A. IPv6 no longer supports broadcast addresses.",
          "selected": false
        },
        {
          "text": "B. With IPv6, the TCP port numbers of most services have changed.",
          "selected": false
        },
        {
          "text": "C. IPv4 addresses can be used without any change with IPv6.",
          "selected": false
        },
        {
          "text": "D. IPv6 no longer supports multicast addresses.",
          "selected": false
        },
        {
          "text": "E. For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "92",
      "questionText": "\nWhat is true about the following command?\n  nmcli device wifi connect WIFIoI\n\n",
      "choices": [
        {
          "text": "A. NetworkManager opens a new public hotspot with the SSID WIFIoI.",
          "selected": false
        },
        {
          "text": "B. NetworkManager creates an unconfigured new virtual network interface named WIFIoI.",
          "selected": false
        },
        {
          "text": "C. NetworkManager creates a new wifi connection WIFIoI and activates it.",
          "selected": false
        },
        {
          "text": "D. NetworkManager returns an error in case the connection WIFIoI does not exist.",
          "selected": false
        },
        {
          "text": "E. NetworkManager returns an error because WIFIoI is an invalid wifi device.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "93",
      "questionText": "\nWhich of the commands below might have produced the following output?\n ",
      "choices": [
        {
          "text": "A. dig -t mx www.example.org",
          "selected": false
        },
        {
          "text": "B. dig www.example.org",
          "selected": false
        },
        {
          "text": "C. dig -t ns www.example.org",
          "selected": false
        },
        {
          "text": "D. dig -t a www.example.org",
          "selected": false
        },
        {
          "text": "E. dig -t soa www.example.org",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "94",
      "questionText": "\nWhich parameter is missing in the command\n  ip link set ____ dev eth0\nto activate the previously inactive network interface eth0? (Specify the parameter only without any\ncommand, path or additional options.)\n\n",
      "choices": [],
      "answer": "up",
      "questionType": "input"
    },
    {
      "questionNumber": "95",
      "questionText": "\nWhich of the following states can NetworkManager show regarding the system's network connectivity?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. up",
          "selected": false
        },
        {
          "text": "B. portal",
          "selected": false
        },
        {
          "text": "C. full",
          "selected": false
        },
        {
          "text": "D. login-required",
          "selected": false
        },
        {
          "text": "E. firewalled",
          "selected": false
        }
      ],
      "answer": "BC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "96",
      "questionText": "\nWhich of the following are valid host addresses for the subnet 203.0.113.64/28? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. 203.0.113.64",
          "selected": false
        },
        {
          "text": "B. 203.0.113.78",
          "selected": false
        },
        {
          "text": "C. 203.0.113.65",
          "selected": false
        },
        {
          "text": "D. 203.0.113.80",
          "selected": false
        },
        {
          "text": "E. 203.0.113.81",
          "selected": false
        }
      ],
      "answer": "BC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "97",
      "questionText": "\nWhich of the following keywords can be used in the file /etc/resolv.conf? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. substitute",
          "selected": false
        },
        {
          "text": "B. lookup",
          "selected": false
        },
        {
          "text": "C. search",
          "selected": false
        },
        {
          "text": "D. nameserver",
          "selected": false
        },
        {
          "text": "E. method",
          "selected": false
        }
      ],
      "answer": "CD",
      "questionType": "multiple"
    },
    {
      "questionNumber": "98",
      "questionText": "\nHow does the ping command work by default?\n\n",
      "choices": [
        {
          "text": "A. Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.",
          "selected": false
        },
        {
          "text": "B. It sends an ARP request to a remote host and waits to receive an ARP response in return.",
          "selected": false
        },
        {
          "text": "C. It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.",
          "selected": false
        },
        {
          "text": "D. Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.",
          "selected": false
        },
        {
          "text": "E. It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return.",
          "selected": false
        }
      ],
      "answer": "A",
      "questionType": "single"
    },
    {
      "questionNumber": "99",
      "questionText": "\nWhich of the following commands displays the number of bytes transmitted and received via the eth0\nnetwork interface? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. route -v via eth0",
          "selected": false
        },
        {
          "text": "B. ip stats show dev eth0",
          "selected": false
        },
        {
          "text": "C. netstat -s -i eth0",
          "selected": false
        },
        {
          "text": "D. ifconfig eth0",
          "selected": false
        },
        {
          "text": "E. ip -s link show eth0",
          "selected": false
        }
      ],
      "answer": "DE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "100",
      "questionText": "\nGiven the following routing table:\n Kernel IP routing table\n Destination   Gateway       Genmask       Flags Metric Ref Use Iface\n 0.0.0.0       192.168.178.1 0.0.0.0       UG    0      0   0   wlan0\n 192.168.1.0   0.0.0.0       255.255.255.0 U     0      0   0   eth0\n 192.168.2.0   192.168.1.1   255.255.255.0 U     0      0   0   eth0\n 192.168.178.0 0.0.0.0       255.255.255.0 U     9      0   0   wlan0\n\nHow would an outgoing packet to the destination 192.168.2.150 be handled?\n\n",
      "choices": [
        {
          "text": "A. It would be passed to the default router 192.168.178.1 on wlan0.",
          "selected": false
        },
        {
          "text": "B. It would be directly transmitted on the device eth0.",
          "selected": false
        },
        {
          "text": "C. It would be passed to the default router 255.255.255.0 on eth0.",
          "selected": false
        },
        {
          "text": "D. It would be passed to the router 192.168.1.1 on eth0.",
          "selected": false
        },
        {
          "text": "E. It would be directly transmitted on the device wlan0.",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "101",
      "questionText": "\nWhich of the following commands will delete the default gateway from the system's IP routing table?\n(Choose two.)\n\n",
      "choices": [
        {
          "text": "A. ifconfig unset default",
          "selected": false
        },
        {
          "text": "B. route del default",
          "selected": false
        },
        {
          "text": "C. ip route del default",
          "selected": false
        },
        {
          "text": "D. netstat -r default",
          "selected": false
        },
        {
          "text": "E. sysctl ipv4.default_gw=0",
          "selected": false
        }
      ],
      "answer": "BC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "102",
      "questionText": "\nWhat command enables a network interface according to distribution-specific configuration, such as\n  /etc/network/interfaces\nor \n  /etc/sysconfig/network-scripts/ifcfg-eth0? \n(Specify only the command without any path or parameters.)\n\n",
      "choices": [],
      "answer": "ifup",
      "questionType": "input"
    },
    {
      "questionNumber": "103",
      "questionText": "\nWhat is true about NetworkManager on a Linux system that uses its distribution's mechanisms to\nconfigure network interfaces? (Choose two.)\n\nExplanation::\n\t\told answers BC\n\t  new answers: CE\n\n",
      "choices": [
        {
          "text": "A. NetworkManager reconfigures all network interfaces to use DHCP unless they are specifically managed by NetworkManager.",
          "selected": false
        },
        {
          "text": "B. NetworkManager must be explicitly enabled for each interface it should manage.",
          "selected": false
        },
        {
          "text": "C. NetworkManager by default does not change interfaces which are already configured.",
          "selected": false
        },
        {
          "text": "D. NetworkManager disables all interfaces which were not configured by NetworkManager.",
          "selected": false
        },
        {
          "text": "E. NetworkManager can be configured to use the distribution's network interface configuration.",
          "selected": false
        }
      ],
      "answer": "CE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "104",
      "questionText": "\nWhich standardized TCP port is used by HTTPS services?\n\n",
      "choices": [
        {
          "text": "A. 25",
          "selected": false
        },
        {
          "text": "B. 80",
          "selected": false
        },
        {
          "text": "C. 8080",
          "selected": false
        },
        {
          "text": "D. 443",
          "selected": false
        },
        {
          "text": "E. 636",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "105",
      "questionText": "\nWhich of the following environment variables can be defined in locale.conf? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. LC_ALL",
          "selected": false
        },
        {
          "text": "B. LC_USERNAME",
          "selected": false
        },
        {
          "text": "C. LC_UTF8",
          "selected": false
        },
        {
          "text": "D. LC_GEOGRAPHY",
          "selected": false
        },
        {
          "text": "E. LC_TIME",
          "selected": false
        }
      ],
      "answer": "AE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "106",
      "questionText": "\nWhich of the following commands sets the system's time zone to the Canadian Eastern Time?\n\n",
      "choices": [
        {
          "text": "A. localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
          "selected": false
        },
        {
          "text": "B. tzconf /etc/localtime",
          "selected": false
        },
        {
          "text": "C. sysctl -w clock.tz='Canada/Eastern'",
          "selected": false
        },
        {
          "text": "D. modprobe tz_ca_est",
          "selected": false
        },
        {
          "text": "E. ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "107",
      "questionText": "\nWhat option to useradd creates a new user's home directory and provisions it with a set of standard files?\n(Specify only the option name without any values or parameters.)\n\n",
      "choices": [],
      "answer": "-m",
      "questionType": "input"
    },
    {
      "questionNumber": "108",
      "questionText": "\nHow can a specific user be prevented from scheduling tasks with at?\n\n",
      "choices": [
        {
          "text": "A. By adding the specific user to the /etc/at.allow file.",
          "selected": false
        },
        {
          "text": "B. By adding the specific user to the [deny] section in the /etc/atd.conf file.",
          "selected": false
        },
        {
          "text": "C. By adding the specific user to the nojobs group.",
          "selected": false
        },
        {
          "text": "D. By adding the specific user to the /etc/at.deny file.",
          "selected": false
        },
        {
          "text": "E. By executing the atd --deny [user] command.",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "109",
      "questionText": "\nWhich file contains the data of the last change of a user's password?\n\n",
      "choices": [
        {
          "text": "A. /etc/gshadow",
          "selected": false
        },
        {
          "text": "B. /etc/passwd",
          "selected": false
        },
        {
          "text": "C. /etc/pwdlog",
          "selected": false
        },
        {
          "text": "D. /var/log/shadow",
          "selected": false
        },
        {
          "text": "E. /etc/shadow",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "110",
      "questionText": "\nWhich of the following fields can be found in the /etc/group file? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. The home directory of the group.",
          "selected": false
        },
        {
          "text": "B. The list of users that belong to the group.",
          "selected": false
        },
        {
          "text": "C. The name of the group.",
          "selected": false
        },
        {
          "text": "D. The default group ACL.",
          "selected": false
        },
        {
          "text": "E. The description of the group.",
          "selected": false
        }
      ],
      "answer": "BC",
      "questionType": "multiple"
    },
    {
      "questionNumber": "111",
      "questionText": "\nWhich of the following sections exists in a systemd timer unit?\n\n",
      "choices": [
        {
          "text": "A. [Events]",
          "selected": false
        },
        {
          "text": "B. [Timer]",
          "selected": false
        },
        {
          "text": "C. [cron]",
          "selected": false
        },
        {
          "text": "D. [Schedule]",
          "selected": false
        },
        {
          "text": "E. [Trigger]",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "112",
      "questionText": "\nWhich of the following getent invocations lists all existing users?\n\n",
      "choices": [
        {
          "text": "A. getent homes",
          "selected": false
        },
        {
          "text": "B. getent uids",
          "selected": false
        },
        {
          "text": "C. getent passwd",
          "selected": false
        },
        {
          "text": "D. getent users",
          "selected": false
        },
        {
          "text": "E. getent logins",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "113",
      "questionText": "\nGiven the following user's crontab entry:\n 15 14 * * 1-5 /usr/local/bin/example.sh\nWhen will the script /usr/local/bin/example.sh be executed?\n\n",
      "choices": [
        {
          "text": "A. At 14:15 local time, January till May.",
          "selected": false
        },
        {
          "text": "B. At 15:14 local time, 1st to 5th day of month.",
          "selected": false
        },
        {
          "text": "C. At 14:15 local time, February till June.",
          "selected": false
        },
        {
          "text": "D. At 14:15 local time, 1st to 5th day of month.",
          "selected": false
        },
        {
          "text": "E. At 14:15 local time, Monday to Friday",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "114",
      "questionText": "\nIf neither cron.allow nor cron.deny exist in /etc/, which of the following is true?",
      "choices": [
        {
          "text": "A. Without additional configuration, all users may create user specific crontabs.",
          "selected": false
        },
        {
          "text": "B. Without additional configuration, only root may create user specific crontabs.",
          "selected": false
        },
        {
          "text": "C. The cron daemon will refuse to start and report missing files in the system's logfile.",
          "selected": false
        },
        {
          "text": "D. When a user creates a user specific crontab the system administrator must approve it explicitly.",
          "selected": false
        },
        {
          "text": "E. The default settings of /etc/crond.conf define whether or not user specific crontabs are generally allowed or not.",
          "selected": false
        }
      ],
      "answer": "B",
      "questionType": "single"
    },
    {
      "questionNumber": "115",
      "questionText": "\nWhat is the purpose of the iconv command?\n\n",
      "choices": [
        {
          "text": "A. It converts bitmap images from one format to another such as PNG to JPEG.",
          "selected": false
        },
        {
          "text": "B. It verifies that the root directory tree compiles to all conventions from the Filesystem Hierarchy Standard (FHS).",
          "selected": false
        },
        {
          "text": "C. It converts files from one character set to an other.",
          "selected": false
        },
        {
          "text": "D. It changes the mode of an inode in the ext4 filesystem.",
          "selected": false
        },
        {
          "text": "E. It displays additional meta information from icon files ending in .ico.",
          "selected": false
        }
      ],
      "answer": "C",
      "questionType": "single"
    },
    {
      "questionNumber": "116",
      "questionText": "\nWhich character in the password field of /etc/passwd is used to indicate that the encrypted password\nis stored in /etc/shadow?\n\n",
      "choices": [
        {
          "text": "A. *",
          "selected": false
        },
        {
          "text": "B. !",
          "selected": false
        },
        {
          "text": "C. s",
          "selected": false
        },
        {
          "text": "D. #",
          "selected": false
        },
        {
          "text": "E. x",
          "selected": false
        }
      ],
      "answer": "E",
      "questionType": "single"
    },
    {
      "questionNumber": "117",
      "questionText": "\nWhat does the term Braille Display refer to?\n\n",
      "choices": [
        {
          "text": "A. A standardized high contract graphical theme for desktop applications?",
          "selected": false
        },
        {
          "text": "B. A Linux desktop environment similar to KDE and GNOME.",
          "selected": false
        },
        {
          "text": "C. A legacy display technology superseded by LCD.",
          "selected": false
        },
        {
          "text": "D. A physical representation of characters using small dots.",
          "selected": false
        },
        {
          "text": "E. A standard file format for data exchange, similar to XML.",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    },
    {
      "questionNumber": "118",
      "questionText": "\nWhich environment variable is used by an X11 client to determine the X Server to connect to? (Specify\nonly the variable name without any preceding commands or values.)\n\n",
      "choices": [],
      "answer": "DISPLAY",
      "questionType": "input"
    },
    {
      "questionNumber": "119",
      "questionText": "\nWhich of the following tasks are handled by a display manager like XDM or KDM? (Choose two.)\n\n",
      "choices": [
        {
          "text": "A. Configure additional devices like new monitors or projectors when they are attached.",
          "selected": false
        },
        {
          "text": "B. Start and prepare the desktop environment for the user.",
          "selected": false
        },
        {
          "text": "C. Create an X11 configuration file for the current graphic devices and monitors.",
          "selected": false
        },
        {
          "text": "D. Lock the screen when the user was inactive for a configurable amount of time.",
          "selected": false
        },
        {
          "text": "E. Handle the login of a user.",
          "selected": false
        }
      ],
      "answer": "BE",
      "questionType": "multiple"
    },
    {
      "questionNumber": "120",
      "questionText": "\nWhich of the following protocols is designed to access the video card output of a virtual machine?\n\n",
      "choices": [
        {
          "text": "A. KDE",
          "selected": false
        },
        {
          "text": "B. X11",
          "selected": false
        },
        {
          "text": "C. Xfce",
          "selected": false
        },
        {
          "text": "D. SPICE",
          "selected": false
        },
        {
          "text": "E. XDMCP",
          "selected": false
        }
      ],
      "answer": "D",
      "questionType": "single"
    }
  ]
}
