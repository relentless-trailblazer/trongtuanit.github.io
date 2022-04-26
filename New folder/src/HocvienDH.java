import java.util.Scanner;

public class HocvienDH extends Hocvien {
	private int soBuoi;

	private int donGiaDH;

	private int uuTien;

	@Override
	public int hocPhi() {
		return (soBuoi * donGiaDH) - uuTien;
	}

	public HocvienDH(String hoTen, String diaChi, int loaiUuTien, int soBuoi, int donGiaDH) {
		super(hoTen, diaChi, loaiUuTien);
		this.soBuoi = soBuoi;
		this.donGiaDH = donGiaDH;
		switch (loaiUuTien) {
		case 1:
			uuTien = 1000000;
			break;
		case 2:
			uuTien = 500000;
			break;
		default:
			break;
		}
	}

	public void nhapThongTinDH() {
		try {
			Scanner sc = new Scanner(System.in);
			this.nhapThongTin();

			System.out.print("Nhap so buoi hoc: ");
			soBuoi = sc.nextInt();
			sc.nextLine();

			System.out.print("Nhap don gia do hoa: ");
			donGiaDH = sc.nextInt();
			sc.nextLine();

			while (soBuoi < 0 || donGiaDH < 0) {
				System.out.println("Thong tin khong hop le, moi nhap lai! ");
				System.out.print("Nhap so buoi hoc: ");
				soBuoi = sc.nextInt();
				sc.nextLine();

				System.out.print("Nhap don gia do hoa: ");
				donGiaDH = sc.nextInt();
				sc.nextLine();
			}

			switch (loaiUuTien) {
			case 1:
				uuTien = 1000000;
				break;
			case 2:
				uuTien = 500000;
				break;
			default:
				break;
			}

			if (soBuoi * donGiaDH < uuTien) {
				System.out.println("Hoc vien uu trien dc tai tro " + ((soBuoi * donGiaDH - uuTien) * -1) + " VND");
			}

		} catch (Exception e) {
			System.out.println("Message in class HocvienDH: Loi khi nhap du lieu. Error: " + e.getStackTrace());
		}

	}

	public HocvienDH() {
	}

}
