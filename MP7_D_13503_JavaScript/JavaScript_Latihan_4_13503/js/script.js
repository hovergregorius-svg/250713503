        function fn_ValForm() {
            var sMsg = "";
            var nama = document.getElementById("nama").value;
            var email = document.getElementById("email").value;
            var umur = document.getElementById("umur").value;
            var kategori = document.getElementById("kategori").value;
            var validasi = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$;

            if (document.getElementById("nama").value == "") {
                sMsg += "\n* Anda belum mengisikan nama";
            }
            if (document.getElementById("email").value == "") {
                sMsg += "\n* Anda belum mengisikan email";
            }else if(validasi.text (email)){
                sMsg += "\nFormat Email salah";
            }
            if (document.getElementById("umur").value == "") {
                sMsg += "\n* Anda belum mengisikan umur";
            }
            if (document.getElementById("kategori").value == "") {
                sMsg += "\n* Anda belum mengisikan kategori";
            }
            
            if (sMsg != "") {
                alert("peringatan:\n" + sMsg);
                return false;
            }

        }
            



        