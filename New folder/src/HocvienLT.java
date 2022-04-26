import java.util.Scanner;

public class HocvienLT extends Hocvien {
	private int soBuoi;

	private int uuTien;

	private int donGiaLT;

	@Override
	public int hocPhi() {
		return (soBuoi * donGiaLT) - uuTien;
	}

	public HocvienLT(String hoTen, String diaChi, int loaiUuTien, int soBuoi, int donGiaLT) {
		super(hoTen, diaChi, loaiUuTien);
		this.soBuoi = soBuoi;
		this.donGiaLT = donGiaLT;
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
	
	public void nhapThongTinLT() {
		try {
			Scanner sc = new Scanner(System.in);
			this.nhapThongTin();

			System.out.print("Nhap so buoi hoc: ");
			soBuoi = sc.nextInt();
			sc.nextLine();

			System.out.print("Nhap don gia lap trinh: ");
			donGiaLT = sc.nextInt();
			sc.nextLine();
			
			while (soBuoi < 0 || donGiaLT < 0) {
				System.out.println("Thong tin khong hop le, moi nhap lai! ");
				System.out.print("Nhap so buoi hoc: ");
				soBuoi = sc.nextInt();
				sc.nextLine();

				System.out.print("Nhap don gia lap trinh: ");
				donGiaLT = sc.nextInt();
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
			
			if (soBuoi * donGiaLT < uuTien) {
				System.out.println("Hoc vien uu tien dc tai tro " + ((soBuoi * donGiaLT - uuTien) * -1) + " VND");
			}

		} catch (Exception e) {
			System.out.println("Message in class HocvienDH: Loi khi nhap du lieu. Error: " + e.getStackTrace());
		}
	}

	public HocvienLT() {
	}
	
	
	

}
